import React from 'react'
import Spline from '@splinetool/react-spline';


const Home = () => {
  return (
    <div>
    <div className='flex justify-between mx-3 my-20'>
      <div className='w-50 md:w-96 md:ml-9 text-white'><h1 className='text-2xl md:text-6xl mb-5 md:mb-10'>HEZEKIAH AJESI</h1> A web developer with 15 years of experience </div>
      <div className="h-[600px] w-[500px] translate-y-20 md:translate-y-15 md:mr-20 sticky-top">
    <Spline scene="https://prod.spline.design/Taea34amEVfK3UiQ/scene.splinecode" />
    </div>
    </div>
    <div className='flex justify-between mx-3 my-20'>
    <div className="h-[600px] w-[500px] translate-y-20 md:mr-20 sticky-top">
    <Spline scene="https://prod.spline.design/Taea34amEVfK3UiQ/scene.splinecode" />
    </div>
      <div className='w-50 md:w-96 md:mr-9 text-white'><h1 className='text-2xl md:text-6xl mb-5 md:mb-10'>HEZEKIAH AJESI</h1> A web developer with 15 years of experience </div>
    </div>

    
    </div>
  )
}

export default Home