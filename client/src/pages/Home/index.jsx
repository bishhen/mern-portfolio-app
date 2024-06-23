import React from 'react'
import Header from '../../components/Header'
import Introduction from './Introduction'


function Home() {
  return (
    <div>
      <Header />
    <div  className='bg-primary px-40'>
    <Introduction />
    </div>
    </div>
  )
}

export default Home