import React from 'react'
import PFP1 from '../assets/PFP55.png'
import { FaChevronRight } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About</h2>
        <div className='flex flex-col md:flex-row gap-20 items-center justify-center'>
            {/* img section  */}
            <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <img src={PFP1} alt="" className='w-[300px] md:w-[1900px] rounded-full border-blue-600 border shadow-blue-500'/>
            </div>
            {/* paragraph section */}
            <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
                <p className='text-lg leading-7 mb-6 '>Hi! I'm Ayomide Awofisayo, but you can call me Ayo. Welcome to my site, where I showcase my ongoing, my career journey, and other things I'm exploring.</p>
                <p className='text-lg leading-7 mb-6 '>I'm a Software Engineering student at the University of Guelph, with a passion for building clean, useful, and creative software. I specialize in full-stack development and web development. Right now, I'm working on a personal investment portfolio assistant, a smart web application I'm co-building to help people make smart investment decisions.</p>
                <p className='text-lg leading-7 '>When I'm not building, I like playing basketball, and football, watching movies and TV shows, or working on new project ideas. I'm currently looking for opportunities where I can grow, learn, contribute, and work with inspiring people.</p>
                <div className='mt-5'>
                    <h1 className='font-bold text-2xl mb-5 text-blue-400'>Skills</h1>
                    <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>JavaScript</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>Java</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>Tailwind Css</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>React</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>C/C++</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>Typescript</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>RESTful API</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>PostgreSQL</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>HTML</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>CSS</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>R</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>COBOL</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>FORTRAN</p>
                        <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full hover:shadow-xl transition-transform transform hover:-translate-y-2'>Ada</p>
                    </div>
                    <a href="#contact">
                    <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact<FaChevronRight/></button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About

// const Skill = () => {
//     return (
//       <section id='skill' className='py-20 bg-gray-900 z-50 text-gray-300'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>My Skills</h2>
//           <div className='flex flex-col md:flex-row gap-20 items-center'>
//               {/* img section  */}
//               {/* <div className='relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'>
//                   <img src={AboutImg} alt="" className='w-[300px] md:w-[500px] rounded-full border-blue-600 border shadow-blue-500'/>
//               </div> */}
//               {/* paragraph section */}
//                 <div className='p-5 md:p-10 text-center mx-auto'> {/* 🛠 added mx-auto */}
//                 {/* <div className='p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 text-center mx-auto'> 🛠 added mx-auto */}
//                 {/* <p className='text-lg leading-7 mb-6 '> HI</p>
//                 <p className='text-lg leading-7 mb-6 '>My Journey</p>
//                 <p className='text-lg leading-7 '> When i'm not</p> */}
                
//                 <div className='flex flex-col items-center justify-center text-center mt-5'>
//                     {/* <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1> */}
//                     <div className='flex flex-wrap gap-4 mb-5 text-sm justify-center'>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>JavaScript</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Java</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Tailwind Css</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>React</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>C/C++</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Typescript</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>PostgreSQL</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>HTML</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>CSS</p>
//                     <p className='bg-gray-950 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>R</p>
//                     </div>
//                     {/* <a href="#contact">
//                     <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1'>Contact <FaChevronRight /></button>
//                     </a> */}
//                 </div>
//                 </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
  
//   export default Skill
