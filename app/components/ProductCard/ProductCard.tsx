import React from 'react'
import AddToCart from '../AddToCart'

const ProductCard = () => {
    return (
        <div className="max-w-[300px] w-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:shadow-white/5 dark:hover:shadow-white/10 p-4 transition-all duration-200 hover:-translate-y-1">
            <img 
                src="product.jpg" 
                alt="Product" 
                className="w-full h-[200px] object-cover rounded-md brightness-100 dark:brightness-90"
            />
            <div className="mt-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Product Name</h3>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">$19.99</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Product description goes here</p>
                <div className="pt-2">
                    <AddToCart />
                </div>
            </div>
        </div>
    )
}

export default ProductCard