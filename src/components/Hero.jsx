import React from 'react'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import { DownloadIcon, MessageCircle } from 'lucide-react';
import hero from '../assets/hero.png';
import hi from '../assets/hi.png';

const Hero = ({darkMode}) => {

  const socialIcons =[
     {icon:mail,alt:'Mail',link:'mailto:jothsnajothsna4@gmail.com'},
   {icon:linkedin,alt:'Linkedin',link:'https://www.linkedin.com/in/jothsna-muralidharan8888a9999/'},
  
    {icon:github,alt:'github',link:'https://github.com/Jothsna1234'},
      {icon:instagram,alt:'Instagram',link:'https://www.instagram.com/jothsna_muralidharan/'},
   
  ];

  const darkTheme={
    textPrimary:'text-white',
    textSecondary:'text-gray-300',
    buttonSecondary:`text-white border-2 border-orange-500 hover:bg-orange-600`,
    decorativeCircle:'bg-orange-500 opacity-10',
  }

    const lightTheme={
    textPrimary:'text-gray-900', 
    textSecondary:'text-gray-700',
    buttonSecondary:`text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
    decorativeCircle:'bg-orange-400 opacity-20',
  }


  const theme =darkMode ? darkTheme:lightTheme;



  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section id='home'
      data-aos='fade-up'
      data-aos-delay='250'
      // className='body-font z-10'    
       className="body-font z-10 pt-32 scroll-mt-32" 
       >
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
          <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
            {socialIcons.map((social,index)=>(
              <a 
              key={index}
              href={social.link}
              target='_blank'
              data-aos-delay={`${400+index*100}`}
            className='transform hover:scale-110 transition-transform duration-300'>
              <img src={social.icon}
              alt={social.alt}
              className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? ''
                :'filter brightness-75'}`} />

            </a>
            ))}
          </div>
          <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
          data-aos='fade-up'
          data-aos-delay='500'>
            Hi,I'm Jothsna
          </h1>
          {/* <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
          data-aos='fade-up'
          data-aos-delay='600'
          >
            Computer Science Graduate with a strong interest in FRONTEND and BACKEND development, exploring .NET Technologies.
          </p> */}
          <p
  className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
  data-aos="fade-up"
  data-aos-delay="600"
>
  Computer Science Graduate with a strong interest in Frontend and Backend Development, exploring AI technologies.
</p>




{/* Buttons */}
        <div className='w-full pt-4 sm:pt-6'>
          <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
          data-aos='fade-up'
          data-aos-delay='700'>
           <a
  href="https://drive.google.com/uc?export=download&id=1AoT8iShHl-AiHFKFUYz1vWc709SN7QGr"
  className="w-full sm:w-auto"
>
              <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                Download CV
              </button>
            </a>
            {/* <a  href="https://wa.me/919384938857" className='w-full sm:w-auto'>
              <button className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} 
              justify-center
                border-0  py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] 
               rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                <MessageCircle className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                Contact Me
                </button>
            </a> */}
            <a
  href="https://wa.me/919384938857"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto"
>
  <button
    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} 
    justify-center border-0 py-3 px-6 sm:px-8 
    hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] 
    rounded-full text-base sm:text-lg font-semibold 
    transition-all duration-300 transform`}
  >
    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
    Contact
  </button>
</a>

          </div>
        </div>


          </div>

          {/* Image */}

          <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
          data-aos='fade-left'
          data-aos-delay='400'>
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
            <div className='relative overflow-hidden'>
              <img src={hero}
              alt="Hero Image"
              className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' />

            </div>
            <img src={hi} alt="Hi icon"
            className='absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 
            h-14 sm:w-20 sm:h-20
             object-contain animate-bounce opacity-90 z-10' />
            </div>
          </div>
        </div>
        <div className={`absolute -top-20 -left-20 w-40 
          h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block `}>

        </div>
      </section>
      
    </div>
  )
}

export default Hero
