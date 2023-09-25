import React, { useEffect } from 'react';
import { useState } from 'react';

export const Title = (props) => {
    const { title, link, Button } = props;
    return (
        <div className="flex items-center justify-between mt-10">
            <h1 className="md:text-4xl text-[12px] text-bold">{title}</h1>
            <button className="text-black bg-yellow-500 font-semibold rounded-md md:py-2 md:px-4 px-4 py-1 text-[10px] md:text-[15px]" style={{ marginRight: "40px" }}><a href={link}>{Button}</a></button>
        </div>
    )
}

export const Card = (props) => {
    const { title, desc, time } = props;

    function formatTime() {
        if (time.includes('months')) {
            const months = time.replace('months', '').trim();
            return `Approx. ${months} months`;
        } else if (time.includes('hours')) {
            const hours = time.replace('hours', '').trim();
            return `Approx. ${hours} hours`;
        } else if (time.includes('minutes')) {
            const minutes = time.replace('minutes', '').trim();
            return `Approx. ${minutes} minutes`;
        }
        return time;
    }

    return (
        <a href="/course-details">
            <div className="md:min-w-[300px] min-w-[150px] md:h-auto md:w-[300px] bg-white rounded-lg overflow-hidden shadow-xl md:mx-4 md:mb-10 mr-4">
                <img
                    className="w-full md:h-32 h-[80px] object-cover object-center"
                    src="sample.png" alt="iskcon-log"
                />
                <div className="md:px-6 md:py-4 p-2 max-auto ">
                    {/* title */}
                    <div className="font-bold md:text-xl md:mb-4 text-[10px]">{title}</div>
                    <div className="flex items-center justify-between">
                        <div className="md:font-semibold font-semibold md:text-lg text-[6px] mb-4 flex space-between">{desc}</div>
                        <button className=" text-white font-semibold md:text-xs text-[6px] bg-yellow-500 rounded-[2px] md:p-2 p-1">PAID</button>
                    </div>
                    {/* time */}
                    <div className="max-auto flex items-center justify-between md:mb-4 mb-2">
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 md:text-[15px] text-[6px]">{formatTime()}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-blue-500 md:text-[15px] text-[6px] text-bold">Start Date - Sep <br className='hidden' /> 25</div>
                        </div>
                    </div>
                    {/* certification */}
                    <div className="max-auto flex items-center justify-between md:mb-10 md:mb-4">
                        <div className="text-gray-400 md:text-[15px] text-[8px]">Bhakti</div>
                        <div className="flex flex-row items-center">
                            <img src="certi-badge.png" alt="" className="md:h-5 md:w-5 h-3 max-auto" />
                            <div className="text-yellow-400 md:text-xs text-[8px] text-bold ml-2">Certificate Course</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-2">
                    <button
                        className="bg-white border-2 border-blue-500 text-blue-500 md:hover:bg-blue-50 md:hover:text-blue-500 md:hover:border-blue-500 font-bold md:py-2 md:px-20 md:text-[15px] text-[8px] rounded-md w-full p-1 mx-4 "
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </a>
    )
}

export const Coursetile = (props) => {
    const { title, desc } = props;
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    return (
        <div className='bg-cover bg-center md:h-300px max-w-full flex' style={{
            backgroundImage: `url('/background-books.jpeg')`

        }}>
            <div className='md:container  text-white md:pl-60 md:pt-20 pt-10 pl-2'>
                <h1 className='md:text-5xl md:w-auto w-[150px] text-[15px] font-bold md:mb-6 '> {title}</h1>
                <p className='md:text-lg text-[8px] md:mb-6 my-4'>{desc}</p>
                <div className='md:max-w-xl  mx-auto md:p-2 bg-white md:rounded-xl rounded-[3px] md:ml-0 md:mb-20 mb-10 '>
                    <div className='flex  border-white md:p-0 p-[2px]'>
                        <input type="text" placeholder='Search Cources' className='md:w-full w-[170px] md:py-2 md:px-4 text-black bg-transparent focus:outline-none ' style={{ fontSize: isMobile ? "8px" : "15px" }} />
                        <button className="text-white bg-blue-500 border-2 border-blue-500 md:px-8  px-4 rounded-[3px] md:hover:bg-blue-600 md:hover:border-2 md:hover:border-blue-500 md:text-[15px] text-[8px]">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ThreeButtons = ({ target }) => {
    const [selectedButton, setSelectedButton] = useState("upcoming");
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    }
    const buttonClass = (button) => {
        return (
            selectedButton === button ? 'border-transparent bg-blue-600 text-white font-semibold md:py-2 md:px-4 rounded-tl-md rounded-tr-md md:text-[15px] text-[10px] p-2' : 'border-transparent bg-white-500 text-black font-semibold md:py-2 md:px-4 rounded-tl-md rounded-tr-md md:text-[15px] text-[10px] p-2'
        );
    }
    return (
        <>
            <div className="flex md:space-x-4 md:mt-10 mt-5 space-x-2">
                <button className={buttonClass('upcoming')} onClick={() => handleButtonClick("upcoming")}>Upcoming Courses</button>
                <button className={buttonClass('ongoing')} onClick={() => handleButtonClick('ongoing')}>Ongoing Courses</button>
                <button className={buttonClass('coming soon')} onClick={() => handleButtonClick('coming soon')}>Coming Soon</button>
            </div>
            <hr className="border-gray-200 md:max-w-[489px] max-w-[290px] mb-10 " />

        </>
    )

}

export const FilterElt = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [CatogoriesCardOpen, setCatogoriesCardOpen] = useState(false);
    const [TeachersCardOpen, setTeachersCardOpen] = useState(false);
    const [languageCardOpen, setLanguageCardOpen] = useState(false);

    const toggleCatogoriesCard = () => {
        setCatogoriesCardOpen(!CatogoriesCardOpen);
        setTeachersCardOpen(false);
        setLanguageCardOpen(false);
    }

    const toggleTeachersCard = () => {
        setCatogoriesCardOpen(false);
        setTeachersCardOpen(!TeachersCardOpen);
        setLanguageCardOpen(false);
    }

    const toggleLanguageCard = () => {
        setCatogoriesCardOpen(false);
        setTeachersCardOpen(false);
        setLanguageCardOpen(!languageCardOpen);
    }

    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="flex flex-col md:ml-5" style={{ marginTop: "-40px" }}>
            {/* catogories */}
            <button
                className={`md:my-10 my-4 border-1 bg-white-500 shadow-md border-white border-2 md:hover:border-blue-400 md:px-4 md:py-2 px-2 py-1 rounded-lg  md:rounded-xl flex flex-row md:w-[94px] w-[60px] md:text-[15px] text-[10px]`}
                onClick={toggleFilter}
            >
                Filters
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="8px"
                    viewBox="0 0 512 512"
                    className={`ml-2 md:mt-[8px] mt-[5px] ${isOpen ? '' : 'rotate-180'}`}
                    style={{
                        transition: 'transform 0.10s ease',
                    }}
                >
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                </svg>
            </button>
            {isOpen && (
                // list
                <div className='flex flex-row mt-0'>
                    <div className='flex flex-col md:ml-5 md:mb-5'>
                        <button
                            className="border-b-2 bg-white text-black-500 flex flex-row items-center md:text-[15px] text-[9px] p-1 md:p-2 md:mr-5"
                            onClick={() => toggleCatogoriesCard()} >Catogories
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="8px"
                                viewBox="0 0 512 512"
                                className='ml-2 mt-1 md:ml-[100px] ml-[50px]'
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        {CatogoriesCardOpen && (
                            <>
                                <div className="absolute left-50  mt-9 md:w-[200px] w-[110px]">
                                    <div className='max-w-md border rounded-br-md rounded-bl-md bg-white text-black shadow-lg overflow-y-scroll' style={{ maxHeight: "250px" }}>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 md:text-[15px] text-[10px] hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 md:text-[15px] text-[10px] hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 md:text-[15px] text-[10px] hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 md:text-[15px] text-[10px] hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 md:text-[15px] text-[10px] hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 md:text-[15px] text-[10px] hover:bg-gray-200 '>catogory</div>

                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col md:ml-5 ml-2 mb-5">
                        {/* Teachers */}
                        <button
                            className="border-b-2 bg-white text-black-500 flex flex-row md:text-[15px] text-[9px] p-1 md:p-2 md:mr-5 mr-2"
                            onClick={() => toggleTeachersCard()}
                        >
                            Teachers
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="8px"
                                viewBox="0 0 512 512"
                                className='ml-2 mt-1 md:ml-[100px] ml-[50px]'
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        {TeachersCardOpen && (
                            // list of teachers
                            <div className="absolute left-50 mt-9 md:w-[200px] w-[110px]">
                                <div className="max-w-md border rounded-br-md rounded-bl-md bg-white text-black shadow-lg overflow-y-scroll" style={{ maxHeight: "250px" }}>
                                    <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 md:text-[15px] text-[10px]'>Teacher</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col md:ml-5 mb-5">
                        {/* Langauage */}
                        <button
                            className="border-b-2 bg-white text-black-500 flex flex-row md:text-[15px] text-[9px] p-1 md:p-2 mr-5"
                            onClick={() => toggleLanguageCard()}
                        >
                            Languages
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className='ml-2 mt-1 md:ml-[100px] ml-[50px]'
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        {languageCardOpen && (
                            // list of languages
                            <div className="absolute left-50 mt-9 md:w-[200px] w-[110px]">
                                <div className="max-w-md border rounded-br-md rounded-bl-md bg-white text-black shadow-lg overflow-y-scroll" style={{ maxHeight: "200px" }}>
                                    <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 text-[10px] md:text-[15px] '>Language</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}