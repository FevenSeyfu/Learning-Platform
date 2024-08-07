import React from 'react'
import Header from '../Components/LandingPage/Header/Header'
import Footer from '../Components/LandingPage/Footer/Footer'

const LandingPageLayout = ({children}) => {
  return (
    <div className='flex flex-col w-screen h-full'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LandingPageLayout