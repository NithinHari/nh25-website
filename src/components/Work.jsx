import React, {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Work = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const data= [
        {       
            name:'💼 Experience Highlights',
            review: <p>
                <ul>
                    <li>• Designed and implemented software features using cutting-edge technologies such as Spring Boot and Microservices architecture, ensuring alignment with project goals and industry best practices.
    </li>
    <li>       • Elevated user interfaces to new heights by incorporating React and Primefaces, resulting in intuitive and responsive experiences for end-users. 
    </li>
    <li>
    • Managed seamless code deployment across development, testing, and production environments utilizing GitHub and Jenkins, facilitating efficient integration and deployment workflows.
    </li>

    <li>
    • Demonstrated proficiency in crafting tailored queries and rollback strategies, optimizing database performance and ensuring data integrity.
    
    </li>
    <li>
    • Leveraged Git and GitHub for effective version control, enabling collaborative development and streamlined code management processes.
    </li>
                </ul>
            </p>
        },
        {
            name:'🤝 Project Management and Collaboration Expert',
            review: <p>
              <ul> 
                <li>
                • Implemented agile methodologies to streamline project management and task prioritization, leading to a remarkable 25% increase in team productivity.</li>
            <li>• Spearheaded collaboration efforts with diverse teams including Database (DB), Middleware (MW), and technical teams, fostering efficient project execution and seamless communication channels.</li>
            <li>• Demonstrated expertise in gathering project requirements and proficiently preparing high-level documents to ensure clarity and alignment throughout project lifecycles.</li>
            </ul> 
            </p>
        },
        {
            name:'🏆 Professional Achievements',
            review: <p>
                <ul>
                    <li>
                    • Collaborated with global product owners to grasp priorities and successfully delivered on requirements</li>
                    <li>• Accenture Extra Mile Award - For successfully delivering exceptional outcomes by collaborating with clients</li>
                    <li>• DXC Champ Award - Honored with the FY24, Q3 DXC Champs Award for excellent performance</li>
                <li>• Recognized consistently for performance excellence</li>
    </ul>
    
            </p>
        }
    ]
  
  return (
    
<div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] p-4 pt-20' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Explore some of the roles I've taken on</p>
            </div>
            <div>
                <Slider  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={1}
  slidesToScroll={1} >
                    {data.map((d) => (
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <p className='text-4xl font-bold inline text-gray-300 text-center'>{d.name}</p>
                            <p className='py-2 text-center'>{d.review}</p>
                          </div>
                        </div>
                        
                    ))}
                    </Slider>
            </div>
            
        </div>
    </div>
    
  )
  
}



export default Work