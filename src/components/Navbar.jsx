// import {useState} from "react"
// import {motion} from "framer-motion";
// import { Sun, Moon, X, Menu } from "lucide-react";


// const Navbar = ({darkMode,toggleDarkMode}) => {
//     const[activeSection,setActiveSection]=useState('home');
//     const[isMenuOpen,setIsMenuOpen]=useState(false);

// const navItems=[
//                {name:'Home',link: '#home'},
//                  {name:'About',link: '#about'},
//                      {name:'Experience',link: '#experience'},
//                    {name:'Skills',link: '#skills'},
//                      {name:'Projects',link: '#projects'},
//                        {name:'Contact',link: '#contact'},

// ];

// const lightColors={
//     navBg: 'bg-linear-to-br from-orange-200 to-white',
//     textPrimary:'text-gray-900',
//     textSecondary:'text-gray-800',
//     textHover:'text-orange-500',
//     textActive:'text-orange-600',
//     indicator:'from-orange-500 to-amber-500',
//     button:'from-orange-500 to amber-500',

// }


// const darkColors={
//     navBg: 'bg-linear-to-br from-gray-200 to-black',
//     textPrimary:'text-white',
//     textSecondary:'text-gray-300',
//     textHover:'text-orange-400',
//     textActive:'text-orange-400',
//     indicator:'from-orange-500 to-amber-500',
//     button:'from-orange-500 to-amber-500',

// };

// const colors=darkMode ? darkColors :lightColors;

// const handleNavClick = (itemName) => {
//     setActiveSection(itemName.toLowerCase());
//     setIsMenuOpen(false);

// };









//   return (
//     <div className="flex justify-center w-full fixed z-50 mt-4">
//         <motion.nav
//         initial ={{ y: -100}}
//         animate={{ y:0}}
//         transition={{duration :0.5}}
//         className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}

//         >
//             <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
// {/* {logo} */}
// <motion.a 
// href="/"
// whileHover={{scale:1.05}}
// className="flex items-center space-x-2">
//     <span className={`text-xl font-bold ${colors.textPrimary}`}>
//     Jothsna
//         <span className="text-orange-500">.

//         </span>
//     </span>

// </motion.a>
//           {/* Navigation Items  */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navItems.map((item) =>(
//                 <a key={item.name}
//                 href={item.link}
//                 onClick={() =>handleNavClick(item.name)} className="relative"
//                    >
//                     <motion.span className={`font-medium transition-colors duration-300
//                         ${
//                             activeSection === item.name.toLowerCase()
//                             ? colors.textActive
//                             : `${colors.textSecondary} hover:text-orange-500`
//                         }`}
//                     whileHover = {{scale: 1.05}}
//                     whileTap={{scale: 0.95}}>
//                         {item.name}
//                         </motion.span>
//                         {activeSection === item.name.toLowerCase() && (<motion.div
//                             layoutId="navbar-indicator"
//                             className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}>

//                             </motion.div>
//                         )}
//                    </a>
            
        
//         ))}
//           </div>
// <div className="flex items-center space-x-2">
//     {/* {Dark Mode toggle} */}
//     <motion.button
//     whileHover={{scale:1.1}}
//     whileTap={{scale:0.9}}
//     onClick={toggleDarkMode}
//     className={`p-2 rounded-full ${darkMode
//         ? 'bg-gray-700'
//         :'bg-gray-200'

//     }transition-colors`}
//     aria-label={
//         darkMode
//         ? 'Switch to light mode'
//         : 'Switch to dark mode'
//     }
// >
//     {darkMode ? (
//         <Sun className="w-5 h-5 text-yellow-300" />
//     ):(
//         <Moon className="w-5 h-5 text-gray-700" />
//     )}
// </motion.button>

// {/* Button */}
// <motion.a href="#contact"
// whileHover={{scale:1.05}}
// whileTap={{scale:0.95}}
// className={`hidden lg:block px-6 py-2  font-semibold  rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
//     Hire Me
// </motion.a>

// </div>
// {/* {Mobile Menu Button} */}

// <div className="flex lg:hidden items-center space-x-4 px-2">
//     <motion.button
//      whileTap={{scale:0.9}}
//      onClick={()=>setIsMenuOpen(!isMenuOpen)}
//      className={`p-2 rounded-lg ${darkMode 
//         ?'bg-gray-700'
//         : 'bg-gray-200'
//      }`}>

//     {isMenuOpen ? (
//         <X className={`w-5 h-5 ${darkMode
//             ? 'text-white'
//             :'text-gray-700'
//         }`}/>
//     ):(
//     <Menu className={`w-5 h-5 ${darkMode ? 'text-white'
//         :'text-gray-700'
//     }`}/>
//     )}
//     </motion.button>
// </div>


//             </div>
// {isMenuOpen && (
//     <motion.div
//     initial ={{opacity:0,height:0}}
//     animate={{opacity:1,height:'auto'}}
//     exit={{opacity:0,height:0}}
//     transition={{duration:0.3}}
//     className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${darkMode
//         ?'bg-gray-900/95'
//         :'bg-white/95'
//     }backdrop-blur-lg rounded-xl shadow-lg border ${
//         darkMode ?'border-gray-700 ': 'border-gray-200'
   
    
//     }`}>
//         <div className="px-4 py-3 space-y-2">
//             {navItems.map((item)=>(
//                 <a 
//                 key={item.name}
//                 href={item.link}
//                 onClick={()=>handleNavClick(item.name)}
//                 className="block">
//                     <motion.div
//                     whileHover={{x:5}}
//                     className={`py-3 px-4 rounded-lg text-center ${
//                         activeSection === item.name.toLowerCase()
//                         ? darkMode ? 'bg-gray-800' :'bg-orange-50'
//                         :''

//                     }`}>
//                         <span className={`font-medium ${
//                             activeSection === item.name.toLowerCase()
//                             ? colors.textActive
//                             : colors.textSecondary
//                         }`}>
//                            {item.name}
//                         </span>
//                      </motion.div>

//                 </a>
//             ))}
            
//             <motion.a
//             href="#contact"
//             onClick={()=> setIsMenuOpen(false)}
//             whileTap={{scale:0.95}}

//             className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}>
//                 Hire Me
//             </motion.a>
//         </div>


//     </motion.div>
// )}



//         </motion.nav>
   
//     </div>
//   )
// }

// export default Navbar

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // 🔒 Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between w-[95%] max-w-6xl px-4 lg:px-8 py-2 rounded-2xl shadow-lg backdrop-blur-lg
        ${darkMode ? "bg-gray-900/80" : "bg-white/80"}`}
      >
        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          <span className={darkMode ? "text-white" : "text-gray-900"}>
            Jothsna<span className="text-orange-500">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={`font-medium transition-colors ${
                activeSection === item.name.toLowerCase()
                  ? "text-orange-500"
                  : darkMode
                  ? "text-gray-300 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Hire Me Desktop */}
          <a
            href="#contact"
            className="hidden lg:block px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-800 dark:text-white" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu (FIXED – NO OVERLAP) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] z-50 rounded-xl shadow-lg backdrop-blur-lg
          ${darkMode ? "bg-gray-900/95" : "bg-white/95"}`}
        >
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className={`text-center py-3 rounded-lg font-medium ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-orange-100 text-orange-600"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 py-3 text-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold"
            >
              Hire Me
            </a>

            {/* <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jothsnajothsna4@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 py-3 text-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold"
>
  Hire Me
</a> */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

