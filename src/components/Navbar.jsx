import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
const navcontent = ['Home', 'About', 'Contact Us']
const socials = ['Fcaebook', 'Instagram', 'LinkedIn']
const style = "bg-red"
  return (
    <div className='m-0 flex flex-row py-3 md:flex-col w-full md:w-[10.7%] justify-between h-[150px] md:h-full bg-neutral-700 text-white text-lg sticky-top md:fixed' >
        <div>
        <h1 className='text-2xl md:p-5 md:text-5xl'>Zeke</h1>
        </div>
        <div className='mt-8 md:mr-12 flex flex-row md:flex-col md:my-20 md:mx-10 '>
        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500 hover:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</Link>
<Link to='/contact'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-10 h-10 text-blue-500 hover:text-white'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</Link>
<Link to='/about'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500 hover:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</Link>
<Link to='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500 hover:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</Link>
        </div>
        <div className='my-10'>
            {socials.map((content, index) => <div key={index} className="px-8">{content}</div>)}
        </div>

    </div>
  )
}

export default Navbar