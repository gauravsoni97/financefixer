import React from 'react'
import ProfileHero from './ProfileHero/ProfileHero'
import MonthlyInput from './MonthlyInput/MonthlyInput'

const Main = () => {
  return (
    <div className=' h-screen w-screen  p-3  bg-gray-50 dark:bg-gray-900'>
      <ProfileHero/>
      <MonthlyInput/>
    </div>
  )
}

export default Main