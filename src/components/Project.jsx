import React from 'react'
import pool from '../assets/pool.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        {
            title: "8ball",
            description: "A simple 2-player 8-ball pool game simulation built using code logic to mimic real pool gameplay. Players take turns aiming and pocketing balls, with win conditions based on standard 8-ball rules. Focused on turn-based mechanics, ball tracking, and basic physics",
            techStack: ["Python", "C", "SQL", "HTML", "CSS"],
            link: "file:///Users/ayomide_aw/Desktop/CIS2750/FinalAssignment/8ball/snooker.html",
            github: 'https://github.com/AyomideAw/8ball',
            image: pool,
        },
        // {
        //     title: "",
        //     description: "",
        //     techStack: [""],
        //     link: "",
        //     github: "",
        //     image: ,
        // }
    ]
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                        <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                        <div className='p-6'>
                            <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.techStack.map((tech, idx) => (
                                    <div key={idx} className='bg-gray-950 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                                ))}
                            </div>
                            <div className='flex gap-3'>
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                                <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-950 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors'><FaGithub/>Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default Project
