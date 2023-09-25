import "./Header.css";
import React, { useEffect, useState } from "react";

function IsMobileFunc() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [isCrossIconOpen, setIsCrossIconOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  const toggleMenuButton = () => {
    setIsOpen(!isOpen);
    setIsCrossIconOpen(!isCrossIconOpen);
  }


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
      <div className=" md:flex md:flex-row md:justify-around md:items-center bg-white-500 md:py-2 ">

        {isMobile ? (
          <>
            <div className="flex items-center md:justify-around justify-between w-auto">
              <img src='/iskcon-logo.jpg' className="md:w-16 md:h-16 h-[50px] w-[50px] rounded-full md:mx-4 mx-1" />
              {isCrossIconOpen ? (
                <img src="/close-icon.png" className="h-[12px] w-[12px] cursor-pointer mx-4" alt="" onClick={() => toggleMenuButton()} />
              ) :
                (<img src="/menu-icon.png" className="h-[20px] w-[20px] cursor-pointer mx-4" alt="" onClick={() => toggleMenuButton()} />)
              }


              {isOpen && (
                <>
                  <div className="absolute left-0 top-12 w-full bg-white z-10">
                    <a href="/" className="text-black text-xs block px-4 py-2 focus:bg-gray-200 font-semibold mt-2">Home</a>
                    <a href="/workshop" className="text-black text-xs block px-4 py-2 focus:bg-gray-200 font-semibold">Workshop</a>
                    <div className={`flex items-center focus:bg-gray-300`} onClick={toggleDropDown}>
                      <div className="text-black text-xs block px-4 py-2 font-semibold cursor-pointer">Courses</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-[10px] h-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    {isDropDownOpen && (
                      <>
                        <div className=" relative px-4 py-4 flex flex-col">
                          <a href="/bhagavata-mahavidyalaya" className="text-xs font-semibold focus:bg-gray-300 px-2 mb-4">ISKCON Board of Examination</a>
                          <a href="/vedavarsity" className="text-xs font-semibold focus:bg-gray-300 px-2 mb-4">Vedavarsity</a>
                          <a href="/self-study" className="text-xs font-semibold focus:bg-gray-300 px-2 mb-4">Self Study</a>
                          <a href="/ancient-wisdom" className="text-xs font-semibold focus:bg-gray-300 px-2 mb-4">Ancient Wisdom</a>
                          <a href="/kids-parents" className="text-xs font-semibold focus:bg-gray-300 px-2 mb-4">Kids & Parents</a>
                          <a href="/events-retreats" className="text-xs font-semibold focus:bg-gray-300 px-2">Events & Retreats</a>
                        </div>
                      </>
                    )}
                    <a href="/membership" className="text-black text-xs block px-4 py-2 focus:bg-gray-200 font-semibold">Membership Based <br /> Learning Programme</a>
                    <a href="/coaching" className="text-black text-xs block px-4 py-2 focus:bg-gray-200 font-semibold">Coaching</a>
                    <a href="/podcast" className="text-black text-xs block px-4 py-2  focus:bg-gray-200 font-semibold">Podcast</a>
                    <a href="/literature" className="text-black text-xs block px-4 py-2  focus:bg-gray-200 font-semibold mb-2">Literature</a>
                  </div>
                </>
              )}
            </div>

          </>
        ) : (
          <>
            <div className="flex items-center ">
              <img src='/iskcon-logo.jpg' className="md:w-16 md:h-16 h-[30px] w-[30px] rounded-full md:mx-4 mx-1" />
            </div>
            <nav className="hidden md:flex md:flex-wrap md:flex-nowrap md:justify-center md:items-center md:mt-4 md:mt-0 md:space-x-14">
              <a href="/" className="text-black md:mx-4 hover:text-gray-200">Home</a>
              <a href="/workshop" className="text-black  sm:my-0 hover:text-gray-200">Workshop</a>
              <Dropdownlist />
              <a href="/membership" className="text-black mx-4 my-2 sm:my-0 hover:text-gray-200">Membership Based <br /> Learning Programme</a>
              <a href="/coaching" className="text-black mx-4 my-2 sm:my-0 hover:text-gray-200">Coaching</a>
              <a href="/podcast" className="text-black mx-4 my-2 sm:my-0 hover:text-gray-200">Podcast</a>
              <a href="/literature" className="text-black mx-4 my-2 sm:my-0 hover:text-gray-200">Literature</a>
            </nav>
          </>
        )}

      </div>
    </>
  )

}


function Dropdownlist() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  const closeDropDown = () => {
    setIsDropDownOpen(false);
  }

  const handleMouseEnter = () => {
    setIsDropDownOpen(true);
  }

  return (
    <div className="flex justify-between items-center z-10">
      <div className="" onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}>
        <a href="#" className="text-black block ml-2  hover:text-gray-200">Courses</a>
        {isDropDownOpen && (
          <div className="absolute w-100 rounded-lg shadow-lg px-2 py-2 bg-white" style={{ minHeight: '160px', minWidth: '160px' }} onMouseEnter={handleMouseEnter} onMouseLeave={closeDropDown}>
            <div className="hover:bg-gray-200 hover:rounded-md p-2 mb-1">
              <a href="/bhagavata-mahavidyalaya">ISKCON Board <br /> of Examination</a>
            </div>
            <div className="hover:bg-gray-200 hover:rounded-md p-2 mb-1 "><a href="/vedavarsity">Vedavarsity</a></div>
            <div className="hover:bg-gray-200 hover:rounded-md p-2 mb-1 "><a href="/self-study">Self Study</a></div>
            <div className="flex flex-col hover:bg-gray-200 hover:rounded-md p-2 mb-1">
              <a href="/ancient-wisdom">Ancient</a>
              <a href="/ancient-wisdom">Wisdom</a>
            </div>
            <div className="hover:bg-gray-200 hover:rounded-md p-2 mb-1 " ><a href="/kids-parents">Kids & Parents</a></div>
            <div className="flex flex-col hover:bg-gray-200 hover:rounded-md p-2 mb-1">
              <a href="/events-retreats">Events &</a>
              <a href="/events-retreats">Retreats</a>
            </div>
          </div>
        )}
      </div>


      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

      </a>
    </div>
  )
}

function template() {

  return (

    <>
      <IsMobileFunc />
    </>

  );
};

export default template;
