import React from 'react'
import axios from 'axios'
import All from './All'
import '../App.css'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
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
    else
      setAll('ALL')
  }
  return (
    <div className='SubNav'>
      <div className='Matches'>MATCHES</div>
      {data?.data.map(match => {
        return (
          <Link className='EachMatch' key={match.id}>
            <div>
              {match.title} - {match.status}
            </div>
          </Link>
        )
      })}
      <div className='All'>
        <Button className='ToggleAll' onClick={handleOnClick}>
          <b>{all}</b>
          {toggleall ? <CaretDownOutlined /> : <CaretUpOutlined />}
        </Button>
      </div>
      {
        !toggleall && <All />
      }
    </div>
  );
}