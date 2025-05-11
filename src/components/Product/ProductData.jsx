import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductData = () => {
    const { id } = useParams()
    const location = useLocation()
    const item = location.state?.item

  return (
    <div className='p-4'>
        <h2 className='bg-green-300 p-2 text-center font-semibold'>{item.category} Category</h2>
        <div className='shadow-md rounded-lg flex md:flex-row flex-col'>
            
            {/* Left side */}
            <div className='p-2 md:w-[30%]'>
                <img src={item.image} alt={item.title} className='w-full h-full'/>
            </div>
            {/* Right side */}
            <div className='p-2 flex flex-col gap-2 md:w-[70%]'>
                <div>
                    <h3 className='font-semibold'>Product Name</h3>
                    <span>{item.title}</span>
                </div>
                <div>
                    <h3 className='font-semibold'>Product Price</h3>
                    <span>$ {item.price}</span>
                </div>
                <div>
                    <h3 className='font-semibold'>Product Description</h3>
                    <span>{item.description}</span>
                </div>
                <div>
                    <h3 className='font-semibold'>Product Rating</h3>
                    <span>{item.rating.rate}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductData