import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

const Videos = () => {
  const items = [];
  const getItems = () => {
    const arr = ['All Videos', 'Categories', 'Playlists'];
    arr.forEach(element => {
      items.push(
        {
          label: (
            <Link >
              {element}
            </Link>
          )
        }
      )
    });
  }
  return (
    <div >
      {getItems()}
      <Dropdown menu={{ items }}>
        <Link className='EachItem'>
          Videos<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}

export default Videos;