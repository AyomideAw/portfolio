import React from 'react'
import pool from '../assets/pool.png'
import HT from '../assets/HT.png'
import TODO from '../assets/TODO.png'
import calc from '../assets/calc.png'
import mon from '../assets/MON.png'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
    const projects = [
        // {
        //     title: "H&T Growth Index",
        //     description: "A regional data visualization tool built to display real-time employment and housing trends across the Toronto-Hamilton corridor. Developed with a focus on accuracy and usability, the H&T Growth Index presents key metrics such as participation rates, unemployment, sectoral employment, housing stats, and completions. Designed for policymakers, developers, and urban planners, the platform delivers up-to-date insights to support data-driven decision-making in both public and private sectors. Emphasis on clear visuals, reliable datasets, and regional relevance ensures the tool supports impactful planning and development initiatives.",
        //     techStack: ["Python", "JavaScript", "Java", "RESTful API", "TypeScript", "SQL"],
        //     link: "https://sheltrix.socs.uoguelph.ca",
        //     github: 'https://github.com/AyomideAw/Metrohousing',
        //     image: HT,
        // },
        {
            title: "H&T Growth Index",
            description: "A regional data visualization tool built using Python to display real-time housing and employment trends in the Toronto-Hamilton area. Users can explore metrics like unemployment rates, housing starts, and sectoral employment. Focused on clean visuals, reliable datasets, and decision-making support for planners and developers.",
            techStack: ["Python", "JavaScript", "Java", "RESTful API", "TypeScript", "SQL"],
            link: "https://sheltrix.socs.uoguelph.ca",
            github: 'https://github.com/AyomideAw/Metrohousing',
            image: HT,
        },
        {
            title: "To-Do",
            description: "A simple desktop To-Do List application built using Python's Tkinter library. Users can add, view, and delete tasks in a clean, user-friendly interface. Task data is stored locally using a text file, enabling persistence between sessions. Focused on functional design, basic file I/O operations, and interactive UI layout with buttons and listboxes.",
            techStack: ["Python", "tkinter"],
            link: "file:///Users/ayomide_aw/Desktop/CIS2750/FinalAssignment/8ball/snooker.html",
            github: 'https://github.com/AyomideAw/To-Do-List',
            image: TODO,
        },
        {
            title: "cALc",
            description: "A simple calculator application built using React and JavaScript to simulate real-time arithmetic operations. Users can perform basic and scientific calculations with a responsive UI that updates dynamically. Focused on state management, operator handling, and user-friendly input logic using component-based design.",
            techStack: ["React.js", "tkinter", "JavaScript", "CSS"],
            link: "file:///Users/ayomide_aw/Desktop/CIS2750/FinalAssignment/8ball/snooker.html",
            github: 'https://github.com/AyomideAw/calculator',
            image: calc,
        },
        {
            title: "The Monitor",
            description: "A user-centered health application designed in Figma to support patients managing incurable diseases. Focused on intuitive UI/UX design through research-driven prototyping, real-time feedback loops, and collaborative iteration. Prioritized accessibility, ease of use, and impactful feature visualization to enhance daily health management and user satisfaction.",
            techStack: ["Figma", "UI/UX"],
            link: "https://www.figma.com/proto/VBAyoESY6nnKQJxT1LXZvO/The-Monitor?node-id=22-11&p=f&t=T0IuTD3xgDmCcQFM-1&scaling=scale-down&content-scaling=fixed&page-id=22%3A10",
            //github: 'https://github.com/AyomideAw/calculator',
            image: mon,
        },
        // {
        //     title: "8ball",
        //     description: "A simple 2-player 8-ball pool game simulation built using code logic to mimic real pool gameplay. Players take turns aiming and pocketing balls, with win conditions based on standard 8-ball rules. Focused on turn-based mechanics, ball tracking, and basic physics",
        //     techStack: ["Python", "C", "SQL", "HTML", "CSS"],
        //     link: "file:///Users/ayomide_aw/Desktop/CIS2750/FinalAssignment/8ball/snooker.html",
        //     github: 'https://github.com/AyomideAw/8ball',
        //     image: pool,
        // },
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
                                {project.github && (
                                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-950 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors'><FaGithub/>Github</a>
                                )}
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
