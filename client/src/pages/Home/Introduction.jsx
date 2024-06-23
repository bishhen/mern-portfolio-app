import React from 'react'

function Introduction() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi , I am</h1>
        <h1 className='text-7xl text-secondary font-semibold'>Bishana Parindi</h1>
        <h1 className='text-7xl text-white font-semibold'>I'm a full stack developer</h1>
        <p className='text-white w-2/3'> I'm a fullstack web developer passionate about creating 
            seamless and user-friendly digital experiences. With expertise in both front-end 
            and back-end technologies, I specialize in building robust applications that bring 
            ideas to life on the web.
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Introduction