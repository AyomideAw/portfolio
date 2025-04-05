import React, { useRef } from 'react'
import { FaLifeRing, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
      
        emailjs.sendForm(
          'service_qanbihe',       //Replace with actual values
          'template_icbpcia',
          formRef.current,
          'fzWyuulLldbQwIAFB'
        )
        .then(() => {
          alert('Message sent successfully!')
        })
        .catch(() => {
          alert('Failed to send message. Please try again.')
        })
      
        e.target.reset()
      }

  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
            <div className='grid lg:grid-cols-2 gap-10 '>
                {/* contact info */}
                <div className='flex flex-col justify-center space-y-8'>
                    <div>
                        <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'> Let's Talk</h1>
                        <p className='text-gray-300 my-5'>Got an idea or a question? Let's talk </p>
                        <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
                        <p className='text-gray-600 mt-2'>
                            <a href="mailto:Ayomideawofisayo@gmail.com" className='text-blue-500 hover:underline'>ayomideawofisayo@gmail.com</a>
                        </p>
                    </div>
                    {/* <div>
                        <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
                        <p className='text-gray-600 mt2'>
                            <a href="/" className='text-blue-500 hover:underline'>+1 519 830 1632</a>
                        </p>
                    </div> */}
                    <div>
                        <h3 className='text-2xl font-semibold text-gray-300'>Find me on here!</h3>
                        <div className='flex gap-3 text-2xl transition-all mt-5'>
                            <a href="https://www.linkedin.com/in/ayomide-awofisayo-a64a082a9/" target='_blank'> <FaLinkedin className='text-blue-400 hover:text-blue-400' /></a>
                            <a href="https://github.com/AyomideAw" target='_blank'><FaGithub className='text-blue-400 hover:text-blue-400'/></a>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8'>
                    <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
                    <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                            <input 
                            type="text" 
                            name="name"
                            //id='name' 
                            className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ' 
                            placeholder='Your Name' 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
                            <input 
                            type="email" 
                            name="email"
                            //id='email' 
                            className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ' 
                            placeholder='Your Email' 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                            <textarea //id="message"
                            name="message" 
                            rows={5} 
                            className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                            placeholder='Your Message'></textarea>
                        </div>
                        <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
