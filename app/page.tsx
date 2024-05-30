import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <div className="flex items-center space-x-2">
        <p>Go to Product page :</p>
        <Link className="py-2 px-3 bg-[#fff] rounded-md text-sm font-medium text-[#4b4b4b]" href={'/products'}>Products</Link>
      </div>
    </div>
  )
}

export default Home