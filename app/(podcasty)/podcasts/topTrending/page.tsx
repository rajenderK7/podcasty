import React from 'react'
import NotFound from './not-found'

function TopTrending() {
  return (
    <div className='outline rounded-lg lg: w-100 lg:m-5 lg:p-5 lg:flex lg:flex-row justify-start bg-white'>
        <div className='lg:mx-2'>Top Trending:</div>
        <button className='outline text-center rounded-lg w-1/4 lg:mx-2 lg:px-2 bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2'>[Topic 1]</button>
        <button className='outline text-center rounded-lg w-1/4 lg:mx-2 lg:px-2 bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2'>[Topic 1]</button>
        <button className='outline text-center rounded-lg w-1/4 lg:mx-2 lg:px-2 bg-[#f3a642] hover:bg-[#77c9ed] hover:border-black hover:border-b-2 hover:border-r-2'>[Topic 1]</button>
    </div>
  )
}

export default TopTrending