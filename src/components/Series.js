import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Series() {
  const items = [];
  const getItems = () => {
    const arr = ['Sri Lanka tour of India, 2023', 'South Africa tour of Australia, 2022-23', 'New Zealand tour of Pakistan, 2022-23', 'Ranji Trophy 2022-23', 'Spotlight', 'Big Bash League 2022-23', ' SA20, 2023', ' Specials', 'Stats & Analysis', ' Bangladesh Premier League 2023', 'International League T20, 2023', ' All Series »'];
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
          Series<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}