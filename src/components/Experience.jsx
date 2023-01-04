import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import python from '../assets/python.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import cpp from '../assets/c++.png'

const Experience = () => {

    const technologies = [
        {
            id: 1,
            name: 'HTML',
            image: html,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            image: css,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            name: 'JavaScript',
            image: javascript,
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'React',
            image: reactImage,
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            name: 'Tailwind',
            image: tailwind,
            style: 'shadow-teal-400'
        },
        {
            id: 6,
            name: 'Next JS',
            image: nextjs,
            style: 'shadow-white'
        },
        {
            id: 7,
            name: 'Python',
            image: python,
            style: 'shadow-yellow-400'
        },
        {
            id: 8,
            name: 'GitHub',
            image: github,
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            name: 'C++',
            image: cpp,
            style: 'shadow-sky-600'
        },
    ]

    return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I´ve worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {technologies.map(technology => (
                    <div key={technology.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${technology.style}`}>
                        <img src={technology.image} alt="html" className='w-20 mx-auto'/>
                        <p className='mt-4'>{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Experience