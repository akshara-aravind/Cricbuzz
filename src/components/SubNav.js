import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CaretDownOutlined,CaretUpOutlined  } from '@ant-design/icons'
import All from './All'
import '../App.css'
import { Button } from 'antd'
const fetchMatches = () => {
  return axios.get('http://localhost:4000/Matches')
}
export default function SubNav() {
  const [all, setAll] = useState('ALL');
  const [toggleall, setToggleall] = useState(true);
  const { data } = useQuery('matches', fetchMatches)
  const handleOnClick = () => {
    setToggleall(!toggleall);
    if (all === 'ALL')
      setAll('CLOSE')
    else setAll('ALL')
  }
  return <div className='SubNav'>
    <div className='Matches'>MATCHES</div>
    {data?.data.map(match => {
      return (
        <Link className='EachMatch'>
          <div key={match.id} >
            {match.title} - {match.status}
          </div>
        </Link>
      )
    })}
    <div className='All'><Button className='ToggleAll' onClick={handleOnClick}><b>{all}</b>{toggleall?<CaretDownOutlined />:<CaretUpOutlined />}</Button> {!toggleall && <All />}</div>

  </div>
}