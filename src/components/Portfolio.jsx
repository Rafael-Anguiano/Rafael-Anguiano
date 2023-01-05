import React, {useState, useEffect} from 'react'

import axios from "axios"; // npm install axios

const Portfolio = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/Rafael-Anguiano/repos')
            .then(function ({data}) {
                data.sort(function(a, b) { 
                    return b.stargazers_count - a.stargazers_count;
                })
                for(let i = data.length-1; 0<=i; i--) {
                    if(data[i].stargazers_count !== 0) {
                        break;
                    }
                    data.pop()
                }
                setRepos(data)
            })
    }, []);


    return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            
            {repos && repos.map((repo) => {
                return (
                    <div key={repo.id} className='shadow-md shadow-gray-600 rounded-lg text-center text-xl font-bold '>
                        <img src={`https://raw.githubusercontent.com/Rafael-Anguiano/${repo.name}/main/image.png`} alt='' className='rounded-md duration 200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            {
                                repo.homepage && <a href={repo.homepage} rel="noreferrer" target="_blank" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            }
                            <a href={repo.html_url} rel="noreferrer" target="_blank" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                    </div>
                )
            })}
                

            </div>

        </div>
    </div>
    )
}

export default Portfolio