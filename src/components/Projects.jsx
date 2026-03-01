// import finance from '../assets/finance.jpg';
// import spotify from '../assets/spotify.jpg';
// import quizzy from '../assets/quizzy.png';
// import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';

// const Projects = ({darkMode}) => {
//    const projects =[
//   {
//   id: 1,
//   title: 'Finzo Tracker',
//   desc: 'AI-powered personal finance tracking web app.',
//   image: finance,
//   tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Gemini AI']
// },
// {
//   id: 2,
//   title: 'MusicFlow',
//   desc: 'Spotify-inspired music streaming web application.',
//   image: spotify,
//   tags: ['React.js', 'HTML', 'Tailwind CSS']
// },
// {
//   id: 3,
//   title: 'Quizify',
//   desc: 'Interactive Java-based quiz application.',
//   image: quizzy,
//   tags: ['Java', 'AWT', 'Swing', 'OOP']
// }

//    ];









//   return (
//    <section
//    id='projects'
//    style={{
//     backgroundColor :darkMode ? '#111827' : '#f9fafb'
//    }}
//     className='relative py-24 scroll-mt-32'>
//          <div className='container mx-auto px-4'>
//         <div className='text-center sm:text-4xl font-bold mb-3'>

//             <h2 className='text-3xl sm:text-4xl font-bold mb-3'
//             style={{
//                 color:darkMode ? 'white' :'#1f2937'
//             }}>
//                 My <span
//                 style={{
//                     background: 'linear-gradient(to right,#f97316,#f59e0b)',
//                     WebkitBackgroundClip:'text',
//                     backgroundClip:'text',
//                     color:'transparent'
//                 }}>
//                     Projects
//                 </span>

//             </h2>
//             <p className='max-w-xl mx-auto text-2xl leading-relaxed italic'
//             style={{
//                 color:darkMode ? '#d1d5db' : '#6b7280'
//             }}>
//                A showcase of my recent work
//             </p>
//        </div>
//        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
//         {projects.map((project,index)=>(
//             <div key={project.id}
//             style={{
//                 background:darkMode
//                 ? 'linear-gradient(to right,#1f2937,#111827)'
//                 : 'linear-gradient(to right,#ffffff,#f9fafb)',
//                 borderColor: darkMode ? '#374151':'#e5e7eb'
//             }}
//             className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
//             data-aos='fade-up'
//             data-aos-delay={index*100}>
//                 <div className='h-36 overflow-hidden rounded-t-xl'>
//                     <img 
//                     src={project.image}
//                     alt={project.title}
//                     className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'/>
//                     </div>
//                     <div className='p-4'>
//                         <h3
//                         className='text-2xl font-bold mb-2'
//                         style={{
//                             color:darkMode ? 'white' : '#1f2937'
//                         }}>
//                             {project.title}
//                         </h3>
//                         <p className='text-xl mb-3'
//                         style={{
//                             color:darkMode ? '#d1d5db' : '#6b7280'
//                         }}>
//                             {project.desc}
//                         </p>
//                         <div className='flex flex-wrap gap-1.5 mb-4'>
//                             {project.tags.map((tag,idx)=>(
//                                 <span 
//                                 key={idx}
//                                 style={{
//                                     backgroundColor :darkMode ? '#374151' : '#f3f4f6', color: darkMode ? '#d1d5db' : '#4b5563'
//                                 }}
//                                 className='px-2 py-1 text-l rounded-full'>
//                                     {tag}
                                    
                                   
//                                 </span>
//                             ))}
//                         </div>
//                         <div className='flex gap-2'>
//                             <a href="#"
//                             style={{
//                                 backgroundColor :darkMode ? '#374151' : '#f3f4f6',
//                                 color:darkMode ? 'white' : '#374151'
//                             }}
//                           className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors' 
//                           data-aos ='zoom-in'
//                           data-aos-delay='300'>
//                             <FaGithub className ='text-sm'/>
//                             <span>Code</span>
//                           </a>
//                           {/* Demo */}

//      {/* <a href="#"
//                             style={{
//                                 background :'linear-gradient(to right,#f97316,#f59e0b)',
//                             }}
//                           className='flex-1 flex items-center 
//                           justify-center gap-1.5 px-3 py-2 text-white text-sm 
//                           rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
//                           data-aos ='zoom-in'
//                           data-aos-delay='400'>
//                             <FaExternalLinkAlt className ='text-sm'/>
//                             <span>Demo</span>
//                           </a>
//  */}

//                         </div>
//                         </div>
//                         </div>

//         ))}
         
//        </div>
//        <div 
//        className='text-center mt-10'>
//          <a href="https://github.com/Jothsna1234"
//             style={{
//                  background :'linear-gradient(to right,#f97316,#f59e0b)',
//                  }}
//             className='inline-flex items-center font-semibold
//              gap-2 px-7 py-4 text-white text-sm 
//     rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
//                           data-aos='zoom-in'
//                           data-aos-delay='400'>
//                             <FaGithub/>
//                             <span>View All Projects</span>
//                             <FaExternalLinkAlt className ='text-sm'/>

//                           </a>
//        </div>
//     </div>
//    </section>





   
//   )
// }

// export default Projects



import finance from '../assets/finance.jpg';
import spotify from '../assets/spotify.jpg';
import quizzy from '../assets/quizzy.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {

  const projects = [
    {
      id: 1,
      title: 'Finzo Tracker',
      desc: 'AI-powered personal finance tracking web app.',
      image: finance,
      tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'Supabase', 'Gemini AI'],
      github: 'https://github.com/Jothsna1234/FinzoTracker'
    },
    {
      id: 2,
      title: 'MusicFlow',
      desc: 'Spotify-inspired music streaming web application.',
      image: spotify,
      tags: ['React.js', 'HTML', 'Tailwind CSS'],
      github: 'https://github.com/Jothsna1234/spotify-clone'
    },
    {
      id: 3,
      title: 'Quizify',
      desc: 'Interactive Java-based quiz application.',
      image: quizzy,
      tags: ['Java', 'AWT', 'Swing', 'OOP'],
      github: 'https://github.com/Jothsna1234/QuizApplication'
    }
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24 scroll-mt-32"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right,#f97316,#f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto text-xl italic"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right,#1f2937,#111827)'
                  : 'linear-gradient(to right,#ffffff,#f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
              className="group rounded-xl border hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-lg mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563'
                      }}
                      className="px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                    color: darkMode ? 'white' : '#374151'
                  }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition"
                >
                  <FaGithub />
                  View Code
                  <FaExternalLinkAlt className="text-xs" />
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <a
            href="https://github.com/Jothsna1234"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(to right,#f97316,#f59e0b)'
            }}
            className="inline-flex items-center gap-3 px-7 py-4 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition"
          >
            <FaGithub />
            View All Projects
            <FaExternalLinkAlt />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;