import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex flex-row justify-around items-center">
      <div className="relative" onMouseEnter={toggleDropDown} onMouseLeave={closeDropDown}>
        <a href="#" className="text-white my-0 hover:text-gray-200">
          Courses
        </a>
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4 mt-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

      </a>
    </div>
  )
}

function template() {
  return (

    <div className="header">

      <header className="bg-blue-500 py-2">
        <div className="flex justify-around items-center">
          <img src='/iskcon-logo.jpg' className="w-16 h-16 rounded-full mx-4" />
          <nav className="flex justify-center items-center">
            <a href="/" className="text-white mx-4 hover:text-gray-200">Home</a>
            <Dropdownlist />
            <a href="/workshop" className="text-white mx-4 hover:text-gray-200">Workshop</a>
            <a href="/membership" className="text-white mx-4 hover:text-gray-200">Membership Based <br /> Learning Programme</a>
            <a href="/coaching" className="text-white mx-4 hover:text-gray-200">Coaching</a>
            <a href="/podcast" className="text-white mx-4 hover:text-gray-200">Podcast</a>
            <a href="/literature" className="text-white mx-4 hover:text-gray-200">Literature</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default template;
