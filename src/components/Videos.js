import React from 'react'
import {Dropdown} from 'antd'
import {CaretDownOutlined} from '@ant-design/icons'
import {Link } from 'react-router-dom'
import '../App.css'

export default function Videos(){
    const items = [
        {
          label: (
            <Link >
              All Videos
            </Link>
          )
        },
        {
            label: (
              <Link >
                Categories
              </Link>
            )
          },
          {
            label: (
              <Link >
                Playlists
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
           Videos<CaretDownOutlined/> 
        </Link>
      </Dropdown>
        </div>
        );
}