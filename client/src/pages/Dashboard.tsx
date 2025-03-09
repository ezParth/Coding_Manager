import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Dashboard