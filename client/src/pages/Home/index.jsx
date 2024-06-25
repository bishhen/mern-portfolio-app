import React from 'react'
import Header from '../../components/Header'
import Introduction from './Introduction'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'

function Home() {
  return (
    <div>
      <Header />
    <div  className='bg-primary px-40 sm:px-5'>
    <Introduction />
    <About />
    <Experiences />
    <Projects />
    </div>
    </div>
  )
}

export default Home