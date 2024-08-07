import React from 'react'

const LandingPageLayout = ({children}) => {
  return (
    <div className='flex flex-col w-screen h-full'>
      <header>Header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default LandingPageLayout