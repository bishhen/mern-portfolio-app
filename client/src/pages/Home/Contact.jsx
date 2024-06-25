import React from 'react'
import SectionTitle from '../../components/SectionTitle';

function Contact() {
    const user = {
        name: "H.M.Bishana Parindi",
        email: "bishanahennayake@gmail.com",
        mobile: "+94710996826",
        country: "Sri Lanka"
    };
  return (
    <div>
        <SectionTitle title='Say Hello' />

        <div className='flex sm:flex-col'>
          <div className='flex flex-col gap-1'>
          <p className='text-tertiary'>{'{'}</p>
          {Object.keys(user).map((key) =>(
            <p className='ml-5'>
                <span className='text-tertiary'>{key} : </span> 
                <span className='text-tertiary'>{user[key]}</span>
            </p>
          ))}
          <p className='text-white'>{'{'}</p>
          </div>

          <div className='h-[500px]'>
          <lottie-player src="https://lottie.host/823dca5e-61c0-43c6-8626-fa9b2c08c56d/vREaEegWKY.json"
           background="##FFFFFF" 
           speed="1" 
           autoplay ></lottie-player>
          </div>
        </div>
    </div>
  )
}

export default Contact