import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import '../App.css'

let newsId;

const fetchComments = () => {
    return axios.get(`http://localhost:4000/LatestNews/${newsId}?_embed=Comments`)

}

export default function ViewComments() {
    const params = useParams();
    newsId = params.newsId;
    const [viewComments, SetViewComments] = useState(false);
    const [oldest, setOldest] = useState(false);
    const { data, isError, isLoading, error, isSuccess } = useQuery('Comments', fetchComments);

    const comments = data?.data.Comments;

    const handleOnClickOldest = () => {
        setOldest(true);
        SetViewComments(true);
    }

    const handleOnClickNewest = () => {
        setOldest(false);
        SetViewComments(true);
    }

    const items = [
        {
            label: (
                <button onClick={handleOnClickOldest} className='Sort'>Oldest</button>
            ),
        },
        {
            label: (
                <button onClick={handleOnClickNewest} className='Sort'>Newest</button>
            ),
        }
    ];

    if (isLoading) {
        return <h1>Loading</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            view comments:
            <Dropdown
                menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['3'],
                }}
            >
                <button>
                    <Space>
                        sort by
                        <DownOutlined />
                    </Space>
                </button>
            </Dropdown>
            {
                viewComments &&
                <div className="ViewComments">
                    {
                        comments.sort((a, b) => { return (oldest ? a.id - b.id : b.id - a.id) })
                            .map(({ id, text }) => {
                                return (
                                    <div className="EachComment" key={id}>
                                        {text}
                                    </div>
                                )
                            })
                    }
                </div>
            }
        </div>
    );
}
