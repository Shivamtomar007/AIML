import React from 'react'
import './MainLayout.css'
import {Link,Outlet} from "react-router-dom"
function MainLayout() {
  return (
    <div>Welcome to Main Page
      <nav>
        <ul className='aa'>
            <li>
                <Link to ="/Login">LOGIN</Link>
            </li>
            <li>
                <Link to ="/Registration">Registration</Link>
            </li>

        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout