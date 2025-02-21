'use client'
import React from 'react'

const AddToCard = () => {
    return (
        <div>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
            onClick={() => console.log("click")}>
            Add to Cart
            </button>
        </div>
    )
}

export default AddToCard