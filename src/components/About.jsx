import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I'm a Software Engineer, who is really passionate about technology and programming.
                I have a Bachelors Degree in Computer Software Engineering, and I'm currently working
                as a Software Developer at Intel.
            </p>
            <p className='text-xl'>
                In the future I'd like to enroll in a master's degree.
            </p>
            <br/>
            <p className='text-xl'>
                I would like to work in a company where I can learn and grow as a developer, and
                where I can contribute to the company's success. I'm a fast learner, and I'm always
                looking for new challenges. I'm a team player, and I like to work in a collaborative
                environment. I'm also a very organized person, and I like to keep things clean and
                tidy.
            </p>
        </div>
    </div>
  )
}

export default About