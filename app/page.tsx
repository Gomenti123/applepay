import React from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'

const page = () => {
  return (
    <div className='flex w-full justify-center p-4 h-screen'>
      <div className='border w-full h-full '>
     <Header />
     <Body />
    </div>
    </div>
    
  )
}

export default page
