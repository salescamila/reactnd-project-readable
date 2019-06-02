import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='nav'>
      <nav>
        <ul>
          <li className='link'>
            <NavLink to='/' exact activeClassName='active'>
              HOME
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to='/newPost' activeClassName='active'>
              NOVA POSTAGEM
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>Categorias: </li>
          <li className='link'>
            <NavLink to='/react' activeClassName='active'>
              REACT
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to='/redux' activeClassName='active'>
              REDUX
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to='/udacity' activeClassName='active'>
              UDACITY
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}