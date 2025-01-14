import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <span>Welcome to our Homepage ! <Link href={'./products'}>click here</Link> to view our products.</span>
    </div>
  )
}

export default page