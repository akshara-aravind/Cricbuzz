import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

const More = () => {
  const items = [];
  const getItems = () => {
    const arr = ['World Test ChampionShip', 'World Cup Super League', 'Photos', 'Mobile Apps', 'Careers', 'Contact Us'];
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
          More<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}

export default More;