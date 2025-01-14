import React from 'react'
import Product from '../components/Product'
import { fetchProducts } from '../actions/product'

const page = async ()  => {
    const product = await fetchProducts()
  return (
   <div className='p-8 bg-purple-400'>
    <h2 className="text-center font-bold text-4xl mb-2">Welcome to Products Page</h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
    {
        product.map((product) => {
            return (
                <Product products = {product} key = {product.id}/>
            )
        })
    }
    </div>
   </div>
    
  )
}

export default page