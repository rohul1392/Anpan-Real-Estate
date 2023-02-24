import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
        <Link to='/'>
        <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
        </Link>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4 style={{color: '#f6fa02'}}>
              <span>2</span> 
私のお気に入り
            </h4>
            <button className='btn1' style={{backgroundColor: '#f6fa02',color:'black'}}>
              <i className='fa fa-sign-out'></i> ログイン
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
