import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return(
        <nav>
            <ul style={{display: 'flex'}}>
                <li style={{border: '6px solid #333', borderRadius: '12px', marginInline: '8px'}}>
                    <NavLink to='/' exact activeClassName='active' >
                        Home
                    </NavLink>
                </li>
                <li style={{border: '6px solid #333', borderRadius: '12px',  marginInline: '8px'}}>
                    <NavLink to='/new' activeClassName='active'>
                        New Tweet
                    </NavLink>
                    
                </li>
            </ul>
        </nav>
    )
}