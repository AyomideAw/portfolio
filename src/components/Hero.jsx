// import React from 'react'
// import Profile from '../assets/profile.png'
// import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
// // import { Download } from 'lucide-react'
// import { motion } from 'framer-motion'

// const Hero = () => {
//   return (
//     <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
//       <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
//         <div className='md:space-y-6 px-4'>
//           <motion.h1 
//             initial={{opacity:0, x:-100}}
//             whileInView={{opacity:1, x:0}}
//             transition={{duration:1, delay:0.2}}
//             className='md:text-6xl text-4xl font-bold mb-4'
//           >
//             Hi👋, I'm <p className='text-blue-400'>Ayomide Awofisayo</p>
//           </motion.h1>
//           {/* <p className='md:text-2xl text-lg mb-3'>Software Engineering Student with a passion for full-stack development and project management |  </p> */}
//           <motion.p 
//             initial={{opacity:0, x:-100}}
//             whileInView={{opacity:1, x:0}}
//             transition={{duration:1.2, delay:0.4}}
//             className='md:text-2xl text-lg mb-3'
//           >
//             Full-Stack Developer
//           </motion.p>
//           <motion.p 
//             initial={{opacity:0, x:-100}}
//             whileInView={{opacity:1, x:0}}
//             transition={{duration:1.4, delay:0.5}}
//             className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'
//           >
//             I'm a Software Engineering Student with a passion for full-stack development and project management. Currently contributing as a IT Support specialist at the University of Guelph, and I'm eager to explore opportunities that push me to create impactful and engaging digital experiences.
//           </motion.p>
//           <motion.button 
//             initial={{opacity:0, x:-100}}
//             whileInView={{opacity:1, x:0}}
//             transition={{duration:1.4, delay:0.5}}
//             className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'
//           >
//             View Resume
//           </motion.button>
//           <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
//             <FaLinkedin className='hover:text-blue-400' />
//             <FaGithub className='hover:text-blue-400' />
//           </div>
//         </div>
//         <div className='relative group'>
//           <motion.img 
//             initial={{opacity:0, scale:0.5}}
//             whileInView={{opacity:1, scale:1}}
//             transition={{duration:1.4, delay:0}}
//             src={Profile} 
//             alt="" 
//             className='rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React from 'react'
import Profile from '../assets/profile.png'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
// import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import "../Css/Hero.css"

const Hero = () => {
  return (
    <section id='home' className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
      {/* background animation */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='max-w-7xl mt-24 mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-40 px-4 md:px-8'>
        <div className='md:space-y-6'>
          <motion.h1 
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.2}}
          className='md:text-6xl text-4xl font-bold mb-4'>Hi👋, I'm <p className='text-blue-400'>Ayomide Awofisayo</p></motion.h1>
          {/* <p className='md:text-2xl text-lg mb-3'>Software Engineering Student with a passion for full-stack development and project management |  </p> */}
          <motion.p 
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1.2, delay:0.4}}
          className='md:text-2xl text-lg mb-3'>Full-Stack Developer</motion.p>
          <motion.p 
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1.4, delay:0.5}}
          className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'>I'm a Software Engineering Student with a passion for full-stack development and project management. Currently contributing as an IT Support specialist at the University of Guelph, and I'm eager to explore opportunities that push me to create impactful and engaging digital experiences.</motion.p>
          <motion.button 
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1.4, delay:0.5}}
          className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] '><a href='https://drive.google.com/file/d/1yUhozcvEse0UqPTMileNgxX5Z9KwXDNi/view' target='_blank'>View Resume</a></motion.button>
          <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
            <a href="https://www.linkedin.com/in/ayomide-awofisayo-a64a082a9/" target='_blank'><FaLinkedin className='hover:text-blue-400' /></a>
            <a href="https://github.com/AyomideAw" target='_blank'><FaGithub className='hover:text-blue-400' /></a>
          </div>
        </div>
        {/* <div className='relative group'>
          <motion.img 
          initial={{opacity:0, scale:0.5}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1.4, delay:0}}
          src={Profile} alt="" className='rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500'/>
        </div> */}
      </div>
    </section>
  )
}

export default Hero