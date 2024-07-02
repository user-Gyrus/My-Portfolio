"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";



const RecentProjects = () => {
  const handleProjectClick = (link: string) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small collection of {' '}
        <span className="text-purple">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8  mt-10">
      {projects.map(({id, title, des, img, iconLists, link}) => (
        <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] " >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img 
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 relative">
                {id !== 3 && (<div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                    key={index} 
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{transform:'translateX(-${5*index*2}[px])'}}>
                      
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>)}
                {id !== 4 && id !== 3 && ( // Render only for projects other than id = 4 (electronics project...)
                <div className="flex justify-center items-center mt-3 cursor-pointer text-purple" onClick={() => handleProjectClick(link)}>
                  <p>Check the GitHub Repo</p>
                  <FaLocationArrow className="ml-2" color="#CBACF9" />
                </div>
              )}
              {id === 3 && (
                <div className="absolute inset-0 flex flex-col justify-center items-center h-full cursor-pointer text-purple" onClick={() => handleProjectClick(link)}>
                  <div className="flex items-center">
                      <p>Check the GitHub Repo</p>
                      <FaLocationArrow className="ml-2" color="#CBACF9" />
                  </div>
                </div>
              )}
              </div>

            </PinContainer>
        </div>
      ))}
      </div>
    </div>
  )
}

export default RecentProjects;
