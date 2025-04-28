import React, { useState } from 'react'
import pool from '../assets/pool.png'
import HT from '../assets/HT.png'
import TODO from '../assets/TODO.png'
import calc from '../assets/calc.png'
import mon from '../assets/mon.png'
import sign from '../assets/SignLang.png'
import connect from '../assets/connect4.png'
import { FaGithub } from 'react-icons/fa'


const Project = () => {

    const [expanded, setExpanded] = useState({}) // Track which projects are expanded

    const toggleDescription = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
    }
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
            title: "C0NN3CT4",
            description: "A self-learning Connect Four AI built using Python and reinforcement learning, designed to master gameplay through self-play without any pre-existing data. The system uses Q-learning and deep Q-networks (DQN) to improve over time, tracking win/loss/draw performance. Users can challenge the trained agent through a sleek web interface powered by React and FastAPI, showcasing human-AI interaction, strategic decision-making, and real-time model inference.",
            techStack: ["Python", "Q-Learning", "Pytorch", "NumPy", "FastAPI", "React", "Vercel", "Matplotlib"],
            //link: "https://sheltrix.socs.uoguelph.ca",
            github: 'https://github.com/AyomideAw/Connect4',
            status: "In Progress",
            image: connect,
        },
        {
            title: "Sign Language Translator",
            description: "A real-time sign language translation platform built using TensorFlow and Python to translate sign gestures. Users can use their webcam to detect both static and dynamic signs, with output displayed instantly on the web interface. Designed with accessibility in mind, the tool supports deaf and hard-of-hearing users, educators, and inclusive communication. Emphasis is placed on accurate detection, user-friendly visuals, and seamless integration of AI into everyday interaction.",
            techStack: ["Python", "TensorFlow Object Detection API", "OpenCV", "Jupyter", "LabelImg"],
            //link: "https://sheltrix.socs.uoguelph.ca",
            github: 'https://github.com/AyomideAw/SignLangV1',
            status: "In Progress",
            image: sign,
        },
        {
            title: "H&T Growth Index",
            description: "A regional data visualization tool built using Python to display real-time housing and employment trends in the Toronto-Hamilton area. Users can explore metrics like unemployment rates, housing starts, and sectoral employment. Focused on clean visuals, reliable datasets, and decision-making support for planners and developers.",
            techStack: ["Python", "JavaScript", "Java", "RESTful API", "TypeScript", "SQL"],
            link: "https://sheltrix.socs.uoguelph.ca",
            github: 'https://github.com/AyomideAw/Metrohousing',
            status: "Completed",
            image: HT,
        },
        {
            title: "To-Do",
            description: "A simple desktop To-Do List application built using Python's Tkinter library. Users can add, view, and delete tasks in a clean, user-friendly interface. Task data is stored locally using a text file, enabling persistence between sessions. Focused on functional design, basic file I/O operations, and interactive UI layout with buttons and listboxes.",
            techStack: ["Python", "tkinter"],
            link: "file:///Users/ayomide_aw/Desktop/CIS2750/FinalAssignment/8ball/snooker.html",
            github: 'https://github.com/AyomideAw/To-Do-List',
            status: "Completed",
            image: TODO,
        },
        {
            title: "cALc",
            description: "A simple calculator application built using React and JavaScript to simulate real-time arithmetic operations. Users can perform basic and scientific calculations with a responsive UI that updates dynamically. Focused on state management, operator handling, and user-friendly input logic using component-based design.",
            techStack: ["React.js", "tkinter", "JavaScript", "CSS"],
            link: "file:///Users/ayomide_aw/Desktop/CIS2750/FinalAssignment/8ball/snooker.html",
            github: 'https://github.com/AyomideAw/calculator',
            status: "Completed",
            image: calc,
        },
        {
            title: "The Monitor",
            description: "A user-centered health application designed in Figma to support patients managing incurable diseases. Focused on intuitive UI/UX design through research-driven prototyping, real-time feedback loops, and collaborative iteration. Prioritized accessibility, ease of use, and impactful feature visualization to enhance daily health management and user satisfaction.",
            techStack: ["Figma", "UI/UX"],
            link: "https://www.figma.com/proto/VBAyoESY6nnKQJxT1LXZvO/The-Monitor?node-id=22-11&p=f&t=T0IuTD3xgDmCcQFM-1&scaling=scale-down&content-scaling=fixed&page-id=22%3A10",
            //github: 'https://github.com/AyomideAw/calculator',
            status: "Completed",
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
                        {/* STATUS BADGE */}
                        {project.status && (
                            <div className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full z-10
                                ${project.status === 'Completed' ? 'bg-green-600 text-white' : ''}
                                ${project.status === 'In Progress' ? 'bg-yellow-500 text-black' : ''}
                                ${project.status === 'Discontinued' ? 'bg-red-600 text-white' : ''}
                            `}>
                            {project.status}
                            </div>
                        )}
                        <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                        <div className='p-6'>
                            <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                            <p className='text-gray-300 mb-2'>{project.description.length > 250 && !expanded[index] ? project.description.slice(0, 250) + '...': project.description}</p>
                            {project.description.length > 250 && (
                                <button onClick={() => toggleDescription(index)}className='text-blue-400 text-sm hover:underline mb-4 -mt-2'>
                                    {expanded[index] ? 'Show Less' : 'Show More'}
                                </button>
                            )}

                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.techStack.map((tech, idx) => (
                                    <div key={idx} className='bg-gray-950 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                                ))}
                            </div>
                            <div className='flex gap-3'>
                                {project.link && (
                                    <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                                )}
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
