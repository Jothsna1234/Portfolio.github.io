
import React from "react";

const timelineData = [
  {
    year: "June 2018 – May 2019",
    leftTitle: "SSLC",
    rightTitle: "St. Joseph’s Matriculation Higher Secondary School",
    description: "Completed SSLC with an Academic Performance of 96%",
  },
  {
    year: "June 2020 – May 2021",
    leftTitle: "HSC",
    rightTitle: "St. Joseph’s Matriculation Higher Secondary School",
    description: "Completed HSC with an Academic Performance of 94%",
  },
  {
    year: "October 2021 – May 2025",
    leftTitle: "B.E COMPUTER SCIENCE AND ENGINEERING",
    rightTitle: "KPR Institute of Engineering and Technology",
    description:
      "Completed an undergraduate degree in Computer Science with an aggregate CGPA of 9.10",
  },
  {
    year: "January 2025 – July 2025",
    leftTitle: "SOFTWARE DEVELOPMENT ENGINEER INTERN",
    rightTitle:
      "Hewlett-Packard (HP Inc – HP Computing and Printing Systems India Pvt. Ltd.) [Bangalore, India]",
    description:
      "Worked as a CSX Developer Intern at HP Inc. (PSO team), enhancing an internal BIOS service automation tool. Built features and improved workflows using ASP.NET MVC, C#, SQL Server, and JavaScript, helping the team streamline BIOS service processes and deliver faster, more reliable results.",
  },
];

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`min-h-screen px-6 sm:px-10 lg:px-20 pt-28 transition-colors duration-500
      ${
        darkMode
          ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900"
          : "bg:white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-20
          text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
        >
          Education & Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          {/* <div
            className={`absolute left-[48%] top-0 w-[2px] h-full
            ${darkMode ? "bg-orange-500/40" : "bg-orange-400/50"}`}
          /> */}
       <div
  className={`absolute top-0 h-full w-[2px]
  left-4 md:left-1/2
  md:-translate-x-1/2
  ${darkMode ? "bg-orange-500/40" : "bg-orange-400/50"}`}
/>


          {timelineData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
    data-aos-delay={index * 150} 
              className={`relative flex flex-col md:flex-row items-center
              ${
                index < 2
    ? "mb-8"
    : index === 2
    ? "mb-10"
    : "mb-6"
              }`}
            >
              {/* LEFT */}
              {/* <div className="md:w-[45%] md:pr-20 text-center md:text-right"> */}
              <div className="md:w-[45%] md:pr-20 pl-10 md:pl-0 text-left md:text-right">

                <p
                  className={`text-lg sm:text-xl font-bold
                  ${darkMode ? "text-gray-200" : "text-gray-800"}`}
                >
                  {item.leftTitle}
                </p>

                <p
                  className={`mt-1 text-sm sm:text-base font-semibold
                  ${darkMode ? "text-orange-400" : "text-orange-600"}`}
                >
                  {item.year}
                </p>
              </div>

              {/* DOT */}
              {/* <span
                className="absolute left-[48%] w-4 h-4 rounded-full bg-orange-500 
                -translate-x-1/2 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              /> */}
       <span
  className="
    absolute
    left-4 md:left-1/2
    -translate-x-1/2
    w-4 h-4
    rounded-full
    bg-orange-500
    shadow-[0_0_12px_rgba(249,115,22,0.8)]
  "
/>



              {/* RIGHT */}
              {/* <div className="md:w-[55%] md:pl-20 mt-6 md:mt-0 text-center md:text-left"> */}
                <div className="md:w-[55%] md:pl-20  pl-10 md:pl-0 mt-6 md:mt-0 text-left">

                <p
                  className={`text-lg sm:text-xl font-semibold
                  ${darkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  {item.rightTitle}
                </p>

                <p
                  className={`mt-3 text-base sm:text-lg leading-relaxed max-w-2xl
                  ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
