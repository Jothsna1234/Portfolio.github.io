import React from 'react'; // Add this to fix 'react is not defined'
import reactLogo from '../assets/reactLogo.png';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';
import sql from '../assets/sql.png'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import javascript from '../assets/java-script.png'
import csharp from '../assets/csharp.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import git from '../assets/git.png'
import express from '../assets/express.png'

const Skills = ({darkMode}) => {
   const skills = [
      { name: 'Java', icon: java },
      {name:'C#',icon:csharp},
          {name:'HTML',icon:html},
              {name:'CSS',icon:css},
              {name:'Javascript',icon:javascript},
        { name: 'React', icon: reactLogo },
         { name: 'Node', icon: nodejs },
               { name: 'Express', icon: express },
    { name: 'Tailwind', icon: tailwind },
        { name: 'Sql', icon: sql },
          { name: 'Mongodb', icon: mongodb },
            { name: 'Git', icon: git },
   
            

  
];
  return (
    <section
     id="skills"
     style={{
        backgroundColor:darkMode ? "#111827" : "#f9fafb"
    }}
     className='py-14 relative overflow-hidden'>
        <div className='py-14 relative overflow-hidden'>
            <div className='container px-5 py-14 mx-auto'>
                <div className='text-center mb-20' data-aos='fade-up'>
                <h1 
                className='sm:text-4xl text-3xl font-bold title-font mb-4'
                style={{
                    color:darkMode ? 'white' : '#1f2937'
                }}
                >
                    My 
                    <span style={{background:'linear-gradient(to right,#f97316,#f59e0b)',
                        WebkitBackgroundClip:'text',
                        backgroundClip:'text',
                        color:'transparent'
                    }}>Skills</span>
                </h1>
                <p
              className='max-w-xl mx-auto text-2xl leading-relaxed italic'

                style={{
                    color:darkMode ? '#d1d5db' : '#4b5563'
                }}>Core Competencies in Software Development
                </p>
                </div>
                <div className='flex flex-wrap -m-4'
                data-aos='fade-up'
                data-aos-delay='200'>
                {skills.map((skill,index)=>(
                    <div
                    key={index}
                    className='p-4 lg:w-1/4 md:w-1/2 w-full'
                    data-aos='fade-up'
                    data-aos-delay={`${300+index * 100}`}>
                        <div 
                        style ={{
                            background:darkMode
                            ? 'linear-gradient(to bottom right,#1f2937,#111827)'
                            : 'linear-gradient(to bottom right,#ffffff,#f3f4f6)',
                            borderColor :darkMode ? '#374151' : '#e5e7eb'
                        }}
                        className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 
                        group hover:shadow-[0_0_30px_rgb(255,165,0,0,0.15)]'>
                            <div className='flex items-center mb-6'>
                                <div  style ={{
                            background:darkMode
                            ? 'linear-gradient(to bottom right,#374152,#1f2937)'
                            : 'linear-gradient(to bottom right,#f3f4f6,#e5e7eb)',
                            borderColor :darkMode ? '#374151' : '#e5e7eb'
                        }}
                            className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-100 transition-transform 
                            duration-300'>
                                <img src={skill.icon}
                                alt={skill.name}
                                className='w-full h-full object-contain' />
                                
                            </div>
                            <h3
                            className='text-2xl font-bold ml-4'
                            style={{
                                color:darkMode ? 'white' :'#1f2937'
                            }}>
                                {skill.name}
                            </h3>
                            </div>

                        </div>
                        </div>
                ))}

                </div>
            </div>
            
        </div>
     </section>
  )
}

export default Skills
