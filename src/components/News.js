import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

export default function News() {
  const items = [
    {
      label: (
        <Link >
          All Scores
        </Link>
      )
    },
    {
      label: (
        <Link >
          Cricbuzz Plus
        </Link>
      )
    },
    {
      label: (
        <Link >
          Latest News
        </Link>
      )
    },
    {
      label: (
        <Link >
          Topics
        </Link>
      )
    },
    {
      label: (
        <Link >
          Spotlight
        </Link>
      )
    },
    {
      label: (
        <Link >
          Opinions
        </Link>
      )
    },
    {
      label: (
        <Link >
          Specials
        </Link>
      )
    },
    {
      label: (
        <Link >
          Stats & Analysis
        </Link>
      )
    },
    {
      label: (
        <Link >
          Interviews
        </Link>
      )
    },
    {
      label: (
        <Link >
          Live Blogs
        </Link>
      )
    },
    {
      label: (
        <Link >
          Harsha Bhogle
        </Link>
      )
    }
  ];
  return (
    <div >
      <Dropdown menu={{
        items
      }}>
        <Link className='EachItem'>
          News<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}