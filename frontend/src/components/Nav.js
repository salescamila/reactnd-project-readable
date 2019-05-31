import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div className='nav'>
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/category' activeClassName='active'>
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink to='/newPost' activeClassName='active'>
              Nova Postagem
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}