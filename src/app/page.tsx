import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <span>Welcome to our Homepage!<Link href={'./products'} className='text-red-600'> Click here</Link> to view our products.</span>
    </div>
  )
}

export default page