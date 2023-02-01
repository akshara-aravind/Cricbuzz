import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import '../App.css'

// let newsId;

const fetchComments = async ({ queryKey }) => {
    // console.log(queryKey[1])
    return await axios.get(`http://localhost:4000/LatestNews/${queryKey[1]}?_embed=Comments`)
}

const ViewComments = ({ getCommentsKey }) => {
    // const params = useParams();
    // newsId = params.newsId;
    // console.log(getCommentsKey)
    const [viewComments, SetViewComments] = useState(true);
    const [oldest, setOldest] = useState(false);
    const { data, isError, isLoading, error, isSuccess } = useQuery(getCommentsKey, fetchComments);

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
            <div className="Comments">
                <div className="NoOfComments">
                    <b> {comments.length} comments</b>
                </div>
                <div>
                    Sort by : <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['3'],
                        }}
                    >
                        <button>
                            <Space>
                                {oldest ? "Oldest" : "Newest"}
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
            </div>

        </div>
    );
}

export default ViewComments;