import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-6xl font-semibold sm:text3xl'>
        <h6 className='text-[#125f63] text-4xl font-semibold f'>Portfolio</h6>
        </div>
    </div>
  )
}

export default Loader