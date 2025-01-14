import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-center text-4xl font-bold w-full h-screen m-auto flex items-center justify-center md:text-3xl sm:text-2xl'>
      <span>Welcome to our Homepage!<Link href={'./products'} className='text-red-600'> Click here</Link> to view our products.</span>
    </div>
  )
}

export default page