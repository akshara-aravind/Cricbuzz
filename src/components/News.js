import React from 'react'
import { Dropdown } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../App.css'

export default function News() {
  const items = [];
  const getItems = () => {
    const arr = ['All Scores', 'Cricbuzz Plus', 'Latest News', 'Topics', 'Spotlight', ' Harsha Bhogle', 'Opinions', ' Specials', 'Stats & Analysis', ' Interviews', ' Live Blogs'];
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
          News<CaretDownOutlined />
        </Link>
      </Dropdown>
    </div>
  );
}

// getItems();
//   const getItems=()=>{
//     const itemslist=[];
//     arr.forEach(element => {
//       items.push(
//         {
//           label: (
//             <Link >
//               {element}
//             </Link>
//           )
//         }
//       )
//     })
//     return itemslist;
//   }
