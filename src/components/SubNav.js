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
  const [toggleAll, setToggleAll] = useState(true);
  const { data, isLoading, isError, error } = useQuery('matches', fetchMatches);
  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const handleOnClick = () => {
    setToggleAll(!toggleAll);
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
          {toggleAll ? <CaretDownOutlined /> : <CaretUpOutlined />}
        </Button>
      </div>
      {
        !toggleAll && <All />
      }
    </div>
  );
}