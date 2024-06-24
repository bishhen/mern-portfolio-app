import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Html",
        "css"
    ]
  return (
    <div>
        <SectionTitle title='About' />

        <div className='flex w-full items-center sm:flex-col'>
            <div className='h-[70vh] w-1/2 sm:w-full'>
            <img className='h-full w-auto' src='/img.jpeg' />
            </div>
<div className='flex flex-col gap-5 w-1/2 sm:w-full'>
    <p className='text-white'>I'm a fullstack web developer passionate about creating 
        seamless and user-friendly digital experiences. With expertise in both front-end 
        and back-end technologies, I specialize in building robust applications that bring ideas 
        to life on the web.On the front-end, I work with technologies like HTML, CSS, and JavaScript, 
        along with frameworks such as React, to create engaging and responsive user 
        interfaces. My goal is to ensure that every user interaction is intuitive and visually 
        appealing, enhancing the overall user experience.
        </p>
        <p className='text-white'>
        On the back-end, I utilize languages like Node.js and work with databases 
        such as MySQL and MongoDB to develop efficient and scalable server-side solutions. I am 
        committed to writing clean, maintainable code and implementing best practices to ensure 
        that the applications I build are both reliable and performant.
        </p>

</div>
        </div>

        <div className='py-5'>
            <h1 className='text-tertiary text-xl'>Here are the technologies I've been working
           </h1>
            <div className='flex flex-wrap gap-10 mt-5'>
            {skills.map((skill, index) => (
              <div className='border border-tertiary py-3 px-10'>
                   <h1 className='text-tertiary'>{skill}</h1>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default About