import Link from 'next/link'
import React from 'react'

import Style from '../styles/About.module.css'

export default function header() {
  return (
    <>
      <nav className={Style.nav}>
          <div className={Style.logo}>Logo</div>
          <ul className={Style.navBrand}>
            <li className={Style.NavList}>
             <Link href="/">Home</Link>
            </li>
            <li className={Style.NavList}>
             <Link href="/about">About</Link>
            </li>
            <li className={Style.NavList}>
             <Link href="/contact">Contact</Link>
            </li>
          </ul>
      </nav>
    
    </>
  )
}
