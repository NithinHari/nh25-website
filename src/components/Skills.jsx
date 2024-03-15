import React from 'react'
// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import GitHub from '../assets/github.png';
// import Mongo from '../assets/mongo.png';
import Java from '../logos/Java.png';
import ReactImg from '../logos/React.png';
import Jenkins from '../logos/Jenkins.png';
import Html from '../logos/Html.png';
import Css from '../logos/Css.png';
import Sql from '../logos/Sql.png';
import Git from '../logos/Git.png';
import Spring from '../logos/Spring.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 p-5 pd-40'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            {/*</div><div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'> */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center py-4'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Java Icon" />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Spring} alt="Spring Icon" />
                    <p className='my-4'>SPRING</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Sql} alt="Sql Icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="Github Icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Jenkins} alt="Jenkins Icon" />
                    <p className='my-4'>Jenkins</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Skills