import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo1 from '../assets/logo1.png'
import NHLOGO from '../assets/NHLOGO.png'

import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
    <img src={NHLOGO} alt="Logo image" style={{width: '150px', float: 'left'}}/>
        </div>
        
            <ul className='hidden md:flex'>
                <li>
                <Link to="home" smooth={true} duration={500} >
                     Home
                </Link>
                </li>
                <li><Link to="about" smooth={true} duration={500} >
                     About
                </Link></li>
                <li><Link to="skills" smooth={true} duration={500} >
                     Skills
                </Link></li>
                <li><Link to="work" smooth={true} duration={500} >
                     Work
                </Link></li>
                <li><Link to="contact" smooth={true} duration={500} >
                     Contact
                </Link></li>
            </ul>
        
        <div onClick={handleClick} className='md:hidden z-10'> 
           {!nav ? <FaBars /> : <FaTimes />}
        </div>


        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2e4466] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >
                     Home
                </Link></li>
                <li  className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >
                     About
                </Link></li>
                <li  className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                     Skills
                </Link></li>
                <li  className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} >
                     Work
                </Link></li>
                <li  className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                     Contact
                </Link></li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/nithin-h/">
                        Linkedin<FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/NithinHari">
                        GitHub<FaGithub size={30}/>
                    </a>
                </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:krishnanithin1998@gmail.com">
                        Email<HiOutlineMail size={30}/>
                    </a>
                </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5f5f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://drive.google.com/file/d/1o83P8aCJufL_r21orDGrLQg-gMktbGuh/view?usp=sharing">
                        Resume<BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
