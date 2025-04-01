import React from 'react'
import { FaLifeRing, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
            <div className='grid lg:grid-cols-2 gap-10 '>
                {/* contact info */}
                <div className='flex flex-col justify-center space-y-8'>
                    <div>
                        <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'> Let's Talk</h1>
                        <p className='text-gray-300 my5'>Got an idea or a question? Let's talk </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
