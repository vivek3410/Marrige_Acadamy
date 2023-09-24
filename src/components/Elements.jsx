import React from 'react';
import { useState } from 'react';

export const Title = (props) => {
    const { title, link, Button } = props;
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-4xl text-bold">{title}</h1>
            <button className="text-black bg-yellow-500 font-semibold rounded-md py-2 px-4 " style={{ marginRight: "40px" }}><a href={link}>{Button}</a></button>
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
            <div className="max-w-xs max-auto bg-white rounded-lg overflow-hidden shadow-xl mx-4 mb-10 ">
                <img
                    className="w-full h-32 object-cover object-center"
                    src="sample.png" alt="iskcon-log"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-4">{title}</div>
                    <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg mb-4 flex space-between">{desc}</div>
                        <button className=" text-white font-semibold text-xs bg-yellow-500 rounded-md px-2 py-2">PAID</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center">
                            <div className="text-gray-400 text-md">{formatTime()}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-blue-500 text-md text-bold">Start Date - Sep</div>
                            <div className="text-blue-500 text-md text-bold mb-2">25</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-10">
                        <div className="text-gray-400 text-md">Bhakti</div>
                        <div className="flex flex-row items-center">
                            <img src="certi-badge.png" alt="" className="h-5 w-5 max-auto" />
                            <div className="text-yellow-400 text-xs text-bold ml-2">Certificate Course</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-6">
                    <button
                        className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 font-bold py-2 px-20 rounded-md"
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
    return (
        <div className='bg-cover bg-center h-300px flex' style={{
            backgroundImage: `url('/background-books.jpeg')`

        }}>
            <div className='container text-white pl-60 pt-20'>
                <h1 className='text-5xl font-bold mb-6'> {title}</h1>
                <p className='text-lg mb-6'>{desc}</p>
                <div className='max-w-xl mx-auto p-2 bg-white  rounded-xl ml-0 mb-20'>
                    <div className='flex items-center border-b border-white'>
                        <input type="text" placeholder='Search Cources' className='w-full py-2 px-3 text-black bg-transparent focus:outline-none ' />
                        <button className="text-white bg-blue-500 border-2 border-blue-500 px-8 py-2 rounded-md hover:bg-blue-600 hover:border-2 hover:border-blue-500">
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
            selectedButton === button ? 'border-transparent bg-blue-600 text-white font-semibold py-2 px-4 rounded-tl-md rounded-tr-md' : 'border-transparent bg-white-500 text-black font-semibold py-2 px-4 rounded-tl-md rounded-tr-md '
        );
    }
    return (
        <>
            <div className="flex space-x-4 mt-10">
                <button className={buttonClass('upcoming')} onClick={() => handleButtonClick("upcoming")}>Upcoming Courses</button>
                <button className={buttonClass('ongoing')} onClick={() => handleButtonClick('ongoing')}>Ongoing Courses</button>
                <button className={buttonClass('coming soon')} onClick={() => handleButtonClick('coming soon')}>Coming Soon</button>
            </div>
            <hr className="border-gray-500  max-w-md mb-10 " style={{ maxWidth: "489px" }} />

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
        <div className="flex flex-col ml-5" style={{marginTop:"-40px"}}>
            <button
                className={`my-10 border-1 bg-white-500 shadow-md border-white border-2 hover:border-blue-400 px-4 py-2  rounded-xl flex flex-row `}
                style={{ width: '94px' }}
                onClick={toggleFilter}
            >
                Filters
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="10px"
                    viewBox="0 0 512 512"
                    className={`ml-2 mt-2 ${isOpen ? '' : 'rotate-180'}`}
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
                <div className='flex flex-row mt-0'>
                    <div className='flex flex-col ml-5 mb-5'>
                        <button
                            className="border-b-2 bg-white text-black-500 flex flex-row text-xs p-2 mr-5"
                            onClick={() => toggleCatogoriesCard()} >Catogories
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className='ml-2 mt-1 ml-20'
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        {CatogoriesCardOpen && (
                            <>
                                <div className="absolute left-50 mt-9 w-40">
                                    <div className='max-w-md border rounded-br-md rounded-bl-md bg-white text-black shadow-lg overflow-y-scroll' style={{ maxHeight: "250px" }}>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>catogory</div>
                                        <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>catogory</div>

                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col ml-5 mb-5">
                        <button
                            className="border-b-2 bg-white text-black-500 flex flex-row text-xs p-2 mr-5 "
                            onClick={() => toggleTeachersCard()}
                        >
                            Teachers
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className='ml-2 mt-1 ml-20'
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        {TeachersCardOpen && (
                            <div className="absolute left-50 mt-9 w-40">
                                <div className="max-w-md border rounded-br-md rounded-bl-md bg-white text-black shadow-lg overflow-y-scroll" style={{ maxHeight: "250px" }}>
                                    <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>Teacher</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col ml-5 mb-5">
                        <button
                            className="border-b-2 bg-white text-black-500 flex flex-row text-xs p-2 "
                            onClick={() => toggleLanguageCard()}
                        >
                            Languages
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="10px"
                                viewBox="0 0 512 512"
                                className='ml-2 mt-1 ml-20'
                            >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </button>
                        {languageCardOpen && (
                            <div className="absolute left-50 mt-9 w-40">
                                <div className="max-w-md border rounded-br-md rounded-bl-md bg-white text-black shadow-lg overflow-y-scroll" style={{ maxHeight: "200px" }}>
                                    <div className='text-black mt-1 mb-1 px-2 py-2 hover:bg-gray-200 '>Language</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}