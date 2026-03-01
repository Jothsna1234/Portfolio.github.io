// const Footer = ({darkMode}) => {
//     const currentYear =new Date().getFullYear();
//   return (
//     <footer
//     style={{
//         background:darkMode
//         ? 'linear-linear(to bottom,#000000,#111827)'
//         : 'linear-linear(to bottom,#f3f4f6,#e5e7eb)',
//         borderColor:darkMode ? '#374151': '#d1d5db'
//     }}
//     className="border-t">
//     <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="text-center md:text-left">
//                 <h3
//                 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white"
//                 style={{
//                     background:'linear-linear(to right,#f97316,#f59e0b)',
//                     WebkitBackgroundClip:'text',
//                     color:'transparent'
//                 }}>
//                     Portfolio

//                 </h3>

//                 <p 
//                 className="text-sm"
//                 style={{
//                     color:darkMode ? '#9ca3af' : '#6b7280'
//                 }}>Aspiring Software Engineer</p>
//    {/* ✅ Dynamic year */}
//             <p
//               className="text-xs mt-2"
//               style={{
//                 color: darkMode ? '#9ca3af' : '#6b7280'
//               }}
//             >
//               © {currentYear} Jothsna. Rights reserved.
//             </p>


//             </div>

//         </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer
const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #000000, #111827)'
          : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db',
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        {/* CENTER ALIGN FIX */}
        <div className="flex flex-col items-center gap-2 text-center">
{/*           
          <h3
            className="text-2xl font-bold"
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Portfolio
          </h3> */}

          {/* DARK + BIGGER TEXT */}
          <p
            className="text-base font-medium leading-relaxed italic"
            style={{
            //   color: darkMode ? '#e5e7eb' : '#374151',
            background: 'linear-gradient(to right, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Aspiring Software Engineer
          </p>

          <p
            className="text-sm font-medium"
            style={{
              color: darkMode ? '#d1d5db' : '#4b5563',
            // background: 'linear-gradient(to right, #f97316, #f59e0b)',
            //   WebkitBackgroundClip: 'text',
            //   color: 'transparent',
            }}
          >
            © {currentYear} Jothsna. Rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
