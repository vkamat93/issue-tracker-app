import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const links =[
  { label: 'Dashboard', href: '/'},
  { label: 'Issues', href: '/issues'}
]


const Navbar = () => {
  return (
   <nav className='flex flex-row justify-between border-b border-gray-300 mb-5 px-5 h-14 items-center'>
    <Link href={"/"}>
        <AiFillBug />
    </Link>
    <ul className='flex flex-row gap-2'>
      {links.map(link => 
      <Link 
      key={link.href} 
      href={link.href} 
      className='text-zinc-500 hover:text-zinc-800 transition-colors'>
        {link.label}
      </Link> 
      )}
    </ul>
   </nav>
  )
}

export default Navbar