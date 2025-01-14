"use server"
import { Product } from "../types";

export const fetchProducts  = async () => {
    const API = "https://inventory-app-ten-gilt.vercel.app/api/v1/products"
    try {
        const res = await fetch(API)
        const product = await res.json()
        // console.log(product.data)
        return product.data as Product[]
    } catch (error) {
        console.log(error)
        return []
    }
     
}
