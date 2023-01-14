import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Rankings() {
  const items = [
    {
      label: (
        <Link >
          ICC Rankings-Men
        </Link>
      )
    },
    {
      label: (
        <Link >
          ICC Rankings-Women
        </Link>
      )
    }
  ];
  return (
    <div >
      <Dropdown menu={{ items }}>
        <Link className='EachItem'>
          Rankings<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}