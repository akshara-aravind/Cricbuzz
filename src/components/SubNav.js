import React from 'react'
import axios from 'axios'
import All from './All'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import '../App.css'

const fetchMatches = async () => {
  return await axios.get('http://localhost:4000/Matches')
}

const SubNav = () => {

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
          {toggleAll ? <b>ALL<CaretDownOutlined /></b> : <b>CLOSE<CaretUpOutlined /></b>}
        </Button>
      </div>
      {
        !toggleAll && <All />
      }
    </div>
  );
}

export default SubNav;