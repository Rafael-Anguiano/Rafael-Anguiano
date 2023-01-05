import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Rafael</h1>
            </div>

            <ul className='hidden md:flex '>
                {links.map((link) => {
                    return (
                        <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                            <Link to={link.link} smooth offset={-100} duration={500}>
                                {link.link}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {
                    isOpen ? <FaTimes size={30}/> : <FaBars size={30}/>
                }
            </div>

            {isOpen && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500'>
                    {links.map((link) => {
                        return (
                            <li key={link.id} className='px-4 cursor-pointer capitalize py-6 font-medium text-4xl  hover:scale-105 duration-200'>
                                <Link onClick={()=> setIsOpen(!isOpen)} to={link.link} smooth offset={-70} duration={500}>
                                    {link.link}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default NavBar