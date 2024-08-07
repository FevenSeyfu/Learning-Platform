import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='w-screen flex flex-row'>
      <aside>Left SideBar</aside>
      <div>
        <header>header</header>
        <main>{children}</main>
      </div>
      <aside>
        Right Sidebar
      </aside>
    </div>
  )
}

export default DashboardLayout