import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Series() {
  const items = [
    {
      label: (
        <Link >
          Sri Lanka tour of India, 2023
        </Link>
      )
    },
    {
      label: (
        <Link >
        South Africa tour of Australia, 2022-23
        </Link>
      )
    },
    {
      label: (
        <Link >
        New Zealand tour of Pakistan, 2022-23
        </Link>
      )
    },
    {
      label: (
        <Link >
          Ranji Trophy 2022-23
        </Link>
      )
    },
    {
      label: (
        <Link >
        Big Bash League 2022-23
        </Link>
      )
    },
    {
      label: (
        <Link >
        SA20, 2023
        </Link>
      )
    },
    {
      label: (
        <Link >
        Bangladesh Premier League 2023
        </Link>
      )
    },
    {
      label: (
        <Link >
        International League T20, 2023
        </Link>
      )
    },
    {
      label: (
        <Link style={{color:'blue'}}>
        All Series »
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
          Series<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}