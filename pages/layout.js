import React from 'react'
import Footer from './footer'
import Header from './header'


export default function layout({children}) {
  return (
    <>
    <Header />
        {children}
    <Footer />
    </>
  )
}
