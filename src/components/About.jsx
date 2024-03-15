import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 p-5'>
  
<       div className='flex flex-col justify-center items-center w-full h-full'> 
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
               <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4' >
                
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Nithin, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm passionate about building excellent software that improves the lives of
                            those around me. Highly skilled and detail-oriented Java Application Developer in designing,
developing, and deploying Enterprise-level Java applications using Agile methodology. Proficient in multiple
programming languages, software development methodologies.
                            What would you do if you had a software expert available at your fingertips?
                        </p>
                        
                    </div>
                    
               </div>
              
        </div>
        
    </div>
  )
}

export default About