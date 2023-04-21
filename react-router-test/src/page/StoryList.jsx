import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'

import DataContext from '../context/DataContext'

export default function StoryList() {
    
    const value = useContext(DataContext); // state, action 값

    return (
    <div>
        <h1>StoryList</h1>
        <ul className='story-list'>
            {
                value.state.storylist.map((data)=>(
                    <li key={data.id}>
                        <Link to={`/storylist/${data.id}`}>
                            {data.name} Story
                        </Link>
                    </li>
                ))
            }
        </ul>
        <Outlet />


    </div>
  )
}
