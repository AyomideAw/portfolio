import React from 'react'

const Experience = () => {
    const education = [
        {
            degree: "Bachelor of Computing, Software Engineering",
            institution: "University of Guelph",
            year: "2022 - 2026",
            description: "Graduated with a strong foundation in data structures and computer algorithms",
            icon: "🎓",
        },
    ];

    const experience = [
        {
            role: "Contract Developer",
            company: "Gropad",
            year: "Oct 2025 - present",
            description: "Developing an end-to-end in-app ticketing system, from event creation to purchase and check-in—streamlining the user experience and reducing booking steps by 40%. Designed and implemented database schemas with validation logic to improve data integrity and cut ticketing errors by 25%.",
            icon: "💻",
        },
        {
            role: "IT Support Specialist",
            company: "University of Guelph",
            year: "Aug 2024 - May 2025",
            description: "Collaborated in a hybrid support model aligned with remote and on-site operations, ensuring reliable digital infrastructure for over 50+ users weekly.",
            icon: "🎧",
        },
        // {
        //     role: "",
        //     company: "",
        //     year: "",
        //     description: "",
        //     icon: "💻",
        // },
    ];
//   return (
//     <section id='experience' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
//         <div className='max-w-6xl mx-auto'>
//             <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Experience</h2>
//             <div className='grid md:grid-cols-2 gap-12'>
//                 {/* Experience section */}
//                 <div>
//                     <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
//                     {experience.map((exp, index) => (
//                         <div key={index} className='flex items-start bg-gray-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
//                             <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
//                             <div>
//                                 <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
//                                 <p className='text-gray-300'>{exp.company}</p>
//                                 <p className='text-gray-300 text-sm italic'>{exp.year}</p>
//                                 <p className='text-gray-300 mt-2'>{exp.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
                
//                 {/* Education section
//                 <div>
//                     <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
//                     {education.map((edu, index) => (
//                         <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
//                             <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
//                             <div>
//                                 <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
//                                 <p className='text-gray-300'>{edu.institution}</p>
//                                 <p className='text-gray-300 text-sm italic'>{edu.year}</p>
//                                 <p className='text-gray-300 mt-2'>{edu.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div> */}
//             </div>
//         </div>
//     </section>
//   )
    return (
        <section id='experience' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
            <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Experience</h2>

            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>

                {/* 2-column grid layout for cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {experience.map((exp, index) => (
                        <div
                        key={index}
                        className='flex items-start bg-gray-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2'
                        >
                            <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                            <div>
                                <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                                <p className='text-gray-300'>{exp.company}</p>
                                <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                                <p className='text-gray-300 mt-2'>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
        );

}

export default Experience
