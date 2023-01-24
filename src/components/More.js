import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

export default function More() {
  const arr = ['World Test ChampionShip', 'World Cup Super League', 'Photos','Mobile Apps','Careers','Contact Us'];
  const items = [];
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
  })

  // const items = [
  //   {
  //     label: (
  //       <Link >
  //         World Test ChampionShip
  //       </Link>
  //     )
  //   },
  //   {
  //     label: (
  //       <Link >
  //         World Cup Super League
  //       </Link>
  //     )
  //   },
  //   {
  //     label: (
  //       <Link >
  //         Photos
  //       </Link>
  //     )
  //   },
  //   {
  //     label: (
  //       <Link >
  //         Mobile Apps
  //       </Link>
  //     )
  //   },
  //   {
  //     label: (
  //       <Link >
  //         Careers
  //       </Link>
  //     )
  //   },
  //   {
  //     label: (
  //       <Link >
  //         Contact Us
  //       </Link>
  //     )
  //   }
  // ];
  return (
    <div >
      <Dropdown menu={{ items }}>
        <Link className='EachItem'>
          More<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}