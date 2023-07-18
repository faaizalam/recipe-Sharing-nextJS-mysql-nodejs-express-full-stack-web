import React from 'react'
import style from "./Layout.module.scss"
import Nav from './Navbar'
// import { NavLink } from './Navbar'


export default function Layout({children}) {
  return (
  <div className={style.gridmain}>
    <header className='headers'><Nav/></header>
    <main className='mains'>{children}</main>
    <footer className='footers'>footer</footer>

  </div>
  )
}
