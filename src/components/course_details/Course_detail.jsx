import React, { useEffect } from "react";
import { Card } from "../Elements";
import { useState } from "react";

function SignupCard() {
    <>
        <div className="flex flex-col bg-white shadow-lg top-6 absolute rounded-md" style={{ marginLeft: "300px", width: "400px" }}>

        </div>
    </>
}
function ForgotCard(props) {
    const { loginButton, loginFunc } = props;
    return (
        <div className="shadow-lg bg-white top-6 absolute rounded-md" style={{ width: "500px", marginLeft: "300px" }}>
            <div className="flex justify-center text-black text-2xl font-semibold p-4">Forgot Password?</div>
            <div className="text-xs text-black px-4 mb-2">Registered Contact Number or Email</div>
            <input type="text" className="mx-4 mb-4 rounded-lg border-2 border-gray-300 p-2 focus:outline-none text-black focus:border-2 focus:border-blue-300" style={{ width: "95%" }} />
            <button className="text-white bg-blue-500 rounded-lg mx-4 flex justify-center p-2" style={{ width: "95%" }}>Continue</button>
            <button className="flex justify-center text-blue-500 bg-white shadow-transparent p-2 m-2" style={{ width: "95%" }} onClick={loginFunc}>Go back to log in.</button>
            {loginButton && (<LoginCard />)}
        </div>
    )
}
function LoginCard(props) {

    const { forgotFunc, signupFunc, SignupButton, ForgotButton } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    }

    let Buttontitle = "Show";
    if (isOpen) {
        Buttontitle = "Hide";
    }
    return (
        <div className="flex flex-col bg-white shadow-lg  absolute top-6 rounded-md" style={{ marginLeft: "300px", width: "500px" }}>
            <div className="text-black text-2xl font-semibold flex justify-center p-4">Log In</div>
            <label htmlFor="" className="text-xs text-black px-4 mt-4 mb-2">Email Address / Contact Number</label>
            <input type="text" className=" mx-4 mb-4 rounded-lg border-2 border-gray-300 p-2 focus:outline-none text-black  focus:border-2 focus:border-blue-300" />
            <label htmlFor="" className="text-xs text-black px-4 mb-2">Email Address / Contact Number</label>
            <div className="flex flex-row mb-1 items-center justify-center">
                <input type="text" className="ml-4 rounded-l-md border-2 border-gray-300 p-2   focus:outline-none text-black w-auto focus:border-2 focus:border-blue-300 " style={{ width: "90%" }} />
                <button className="bg-gray-400 text-black border-2 border-gray-400 rounded-r-md mr-4 px-4 py-2 " onClick={() => toggleButton()}>{Buttontitle}</button>
            </div>
            <div className="inline-flex justify-between items-center py-3 mx-4">
                <div className="inline-flex items-center">
                    <input type="checkbox" className="h-3 w-3" />
                    <div className="text-black text-xs ml-2">Keep Me Logged In</div>
                </div>
                <button className="text-blue-500 text-xs" onClick={forgotFunc}>Forgot Password?</button>
                {ForgotButton && (<ForgotCard />)}
            </div>
            <button className="bg-blue-500 rounded-md px-2 py-2 mx-4 text-white">Log In</button>
            <span className="text-black text-xs flex items-center justify-center mb-10">By Signing up, you accept our <a href="" className="text-blue-500 px-1">  terms and conditions  </a> and <a href="" className="text-blue-500 px-1"> privacy policy </a></span>
            <div className="text-black text-md flex justify-center mb-4">Coming for the first time?
                <button className="text-blue-500 px-1" onClick={() => signupFunc()}>Sign Up Now!</button>
                {SignupButton && (
                    <SignupCard />
                )}
            </div>
        </div>
    )
}

function Title(props) {
    const { CourseName, TeacherName, price, isCertificateCourse, } = props;

    const [isEnrolledButtonOpen, setIsEnrolledButton] = useState(false);
    const [isForgotButtonclicked, setIsForgotButtonClicked] = useState(false);
    const [isSignupButtonClicked, setIsSignupButtonClicked] = useState(false);

    const toggleSignupButton = () => {
        setIsEnrolledButton(false);
        setIsSignupButtonClicked(!isSignupButtonClicked);
        setIsForgotButtonClicked(false);
    }
    const toggleForgotButton = () => {
        setIsEnrolledButton(false);
        setIsSignupButtonClicked(false);
        setIsForgotButtonClicked(!isForgotButtonclicked);
    }
    const toggleEnrolledButton = () => {
        setIsForgotButtonClicked(false);
        setIsSignupButtonClicked(false);
        setIsEnrolledButton(!isEnrolledButtonOpen);
    }

    return (
        <div className="bg-cover bg-center md:h-full h-[180px] md:w-full flex" style={{ backgroundImage: `url('/background-books.jpeg')` }}>
            <div className="container text-white md:pl-60 md:pt-20 pl-4 pt-5">
                <h1 className="md:text-[40px] text-[15px] font-bold md:mb-10 mb-4">{CourseName}</h1>
                <div className="md:text-[15px] text-[8px] font-semibold md:mb-10 mb-4">By {TeacherName}</div>
                <div className="flex flex-row md:mb-10">
                    <img src="/rupee-icon.png" className="md:h-7 md:w-7 h-4 mb-5" alt="" />
                    <div className="font-semibold md:text-3xl text-white ml-2 md:-mt-2">{price}</div>
                    <img src="/certi-badge.png" alt="" className="md:w-5 md:h-5 h-3 ml-7 mt-2 md:mt-1" />
                    <div className="text-yellow-500 md:text-[12px] text-[10px] font-semibold md:ml-3 ml-1 mt-[5px]">{(isCertificateCourse) ? (<><div>Certificate Course</div></>) : (<><div>Non Certificate course</div></>)}</div>
                </div>
                <button className="bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 border-2 border-blue-500 md:px-7 md:py-2 md:text-[15px] text-[8px] px-2 py-1 md:mb-10 mb-5" onClick={() => toggleEnrolledButton()}>Enroll Now</button>
                {isEnrolledButtonOpen ? (
                    <><LoginCard /></>
                ) : isForgotButtonclicked ? (<><ForgotCard forgotFunc={toggleEnrolledButton()} ForgotButton={isEnrolledButtonOpen} /></>) : isSignupButtonClicked ? (<SignupCard />) : (<></>)
                }

            </div>
        </div>
    )
}

function FAQ(props) {

    const { question, answer } = props;
    const [isOpen, setIsOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <>


            <button onClick={() => toggleButton()} className="border-2 border-gray-200 bg-white max-w-5xl p-2 rounded-lg md:my-4 my-2">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-blue-500 md:text-[15px] text-[10px] font-semibold">{question}</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height={`${isMobile ? "8px" : "10px"}`}
                            viewBox="0 0 512 512"
                            className={`mr-2 ${isOpen ? '' : 'rotate-180'}`}
                            style={{
                                transition: 'transform 0.10s ease',
                            }}
                        >
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                            />
                        </svg>
                    </div>
                    {isOpen && (
                        <>
                            <div className="flex flex-col md:max-w-[330px] max-w-[220px]">
                                <div className="text-black md:text-[12px] text-[8px] mt-2">1. Login into your account from <a className="text-blue-500" href="https://www.vedvarsity.com">https://www.vedvarsity.com</a></div>
                                <div className="text-black md:text-[12px] text-[8px] mr-1">2. The live classes section is on the right side of the screen.</div>
                            </div>
                        </>
                    )}
                </div>
            </button>
        </>
    )
}

function Main(props) {

    const {
        CourseName, TeacherName, price, isCertificateCourse,
        Courseduration, VideoDuration, No_of_Session, sessions_per_week, Language, Elgibility,
        start_date, end_date, start_time, end_time, start_day, end_day,
        about_teacher,
    } = props;

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
        <div className="max-w-full">
            <Title CourseName={CourseName} TeacherName={TeacherName} price={price} isCertificateCourse={isCertificateCourse} />

            {/* Overall Details */}
            <div className="flex flex-row md:p-6 bg-white justify-center max-w-full md:overflow-hidden overflow-x-scroll my-2">
                <div className="flex flex-col items-center md:p-2 ">
                    <div className="font-bold text-black md:text-[17px] text-[8px] mb-1">Course Duration</div>
                    <div className="text-black md:text-[15px] text-[6px]">Approx {Courseduration} Months</div>
                </div>
                <hr class="border-gray-300 h-auto md:border-l-2 border-l-[1px] md:mx-4 mx-1" />
                <div className="flex flex-col items-center md:p-2 ">
                    <div className="font-bold text-black md:text-[17px] text-[8px]  mb-1">Videos</div>
                    <div className="text-black md:text-[15px] text-[6px]">{VideoDuration} Hours</div>
                </div>
                <hr class="border-gray-300 h-auto md:border-l-2 border-l-[1px] md:mx-4 mx-2" />
                <div className="flex flex-col items-center md:p-2">
                    <div className="font-bold text-black md:text-[17px] text-[8px] mb-1">No. Of Sessions</div>
                    <div className="text-black md:text-[15px] text-[6px]">Approx {No_of_Session}</div>
                </div>
                <hr class="border-gray-300 h-auto md:border-l-2 border-l-[1px] md:mx-4 mx-2" />
                <div className="flex flex-col items-center md:p-2">
                    <div className="font-bold text-black md:text-[17px] text-[8px] mb-1">Sessions per week</div>
                    <div className="text-black md:text-[15px] text-[6px]">{sessions_per_week}</div>
                </div>
                <hr class="border-gray-300 h-auto md:border-l-2 border-l-[1px] md:mx-4 mx-2" />
                <div className="flex flex-col items-center md:p-2">
                    <div className="font-bold text-black md:text-[17px] text-[8px] mb-1">Language</div>
                    <div className="text-black md:text-[15px] text-[6px]">{Language}</div>
                </div>
                <hr class="border-gray-300 h-auto md:border-l-2 border-l-[1px] md:mx-4 mx-2" />
                <div className="flex flex-col items-center md:p-2">
                    <div className="font-bold text-black md:text-[17px] text-[8px] mb-1">Eligibility</div>
                    <div className="text-black md:text-[15px] text-[6px]">{Elgibility}</div>
                </div>
            </div>

            {/* schedule & Teacher */}
            <div className="flex flex-col justify-center items-center bg-gray-50 py-10">
                {/* schedule */}
                <div className="shadow-xl md:px-20 md:py-6 px-4 py-4 bg-white rounded-lg">
                    <div className="flex flex-col">
                        <div className="text-black font-semibold md:text-2xl text-[15px]">Schedule of Classes</div>
                        <div className="flex flex-row md:py-10 py-4">
                            <div className="flex flex-row items-center md:mr-[185px] mr-[50px]">
                                <img src="/calendar-icon.png" alt="" className="bg-gray-300 md:p-4 p-[10px] md:w-20 md:h-20 w-10 h-10 rounded-[4px] md:rounded-lg" />
                                <div className="flex flex-col pl-2 md:pl-5">
                                    <div className="text-blue-500 md:text-[15px] text-[8px]  md:font-semibold">Starts on {start_date}</div>
                                    <div className="text-black md:text-[15px] text-[8px]  md:font-semibold">{start_date} - {end_date}</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <img src="/clock-icon.png" alt="" className="bg-gray-300 md:p-4 p-[10px] md:w-20 md:h-20 w-10 h-10 rounded-[4px] md:rounded-lg" />
                                <div className="flex flex-col pl-2 md:pl-5">
                                    <div className="text-black md:font-semibold md:text-[15px] text-[8px]">{start_time} to {end_time} IST <br />
                                        Regular classes on <br />
                                        {start_day} to {end_day}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="text-blue-500 font-semibold md:text-[15px] text-[10px] ">View Detailed Schedule</div>
                            <img src="/arrow-blue-icon.png" className="md:w-3 md:h-3 w-2 h-2 ml-2 bg-white" alt="" />
                        </div>
                    </div>
                </div>

                {/* about teacher */}
                <div className=" bg-white shadow-xl md:p-10 p-4 mt-10 rounded-xl " style={{ maxWidth: isMobile ? "50%" : "60%", minWidth: isMobile ? "90%" : "60%" }}>
                    <div className="flex flex-row">
                        <div className="flex flex-col items-center p-2">
                            <img src="/user-icon.png" className="md:h-20 md:w-20 w-15 h-15 md:border-2 rounded-lg md:border-gray-500 md:p-4 mb-2" alt="" />
                            <div className="text-black md:text-[15px] text-[10px] md:ml-2 font-semibold ">{TeacherName}</div>
                        </div>
                        <div className="flex flex-col md:px-10 px-4">
                            <div className="text-black font-semibold md:text-3xl text-xs md:mb-4 mb-2">About the Teacher</div>
                            <div className="text-black text-[8px] md:text-[18px] md:text-[8px] md:mr-20 mr-4"><b>{TeacherName}</b> {about_teacher} </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* course Overview */}
            <div className="bg-blue-50 md:py-10 md:pl-60 p-4 ">
                <div className="max-w-5xl">
                    <div className="md:text-2xl text-lg font-semibold text-black">Course Overview</div>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Course Description:</div>
                    <span className="text-xs text-black md:mr-40 mr-40">Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams.</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Eligibility:</div>
                    <span className="text-xs text-black mr-40 font-lg">To pursue this course, you must have completed the Bhakti Sastri course and hold a Bhakti Sastri certificate issued by the ISKCON Board of Examination.</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Course Materials:</div>
                    <span className="text-xs text-black md:mr-40 font-lg">Institute will provide you a comprehensive Students' Handbook.</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Course Duration:</div>
                    <span className="text-xs text-black mr-40 font-lg">The approximate duration of the course is 500 hours.</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Target Audience:</div>
                    <span className="text-xs text-black mr-40 font-lg">This course is open to all devotees who have a Bhakti-shastri certification and are enthusiastic about furthering their scriptural studies with the Srimad-Bhagavatam. It is in accordance with Srila Prabhupada's desire that all ISKCON devotees undertake the Bhakti-Vaibhava certification.</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Assessment Plan:</div>
                    <span className="text-xs text-black mr-40 font-lg">The assessments will include open book questions, closed book exams for each unit, sloka recitation, and four presentations covering Cantos 1 to 6.</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Course Requirements:</div>
                    <span className="text-xs text-black mr-40 font-lg">To be eligible for the Bhakti Vaibhav degree, you must meet the following requirements:</span>
                    <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Age: <span className="text-xs no-underline text-black mr-40 font-lg"></span></div>

                    <div className="flex flex-col">
                        <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Daily Sadhana: </div>
                        <span className="text-xs text-black mr-40 font-lg">Chant a minimum of 16 rounds of the Hare Krishna maha-mantra and follow the four regulative principles.</span>
                    </div>

                    <div className="flex-flex-col">
                        <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Bhakti Sastri Certificate:</div>
                        <span className=" no-underline text-xs text-black md:mr-40 ">Hold a Bhakti Sastri certificate from any authorized ISKCON center issued by the ISKCON Board of Examinations.</span>
                    </div>

                    <div className="flex flex-col">
                        <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Prior Preparation:</div>
                        <span className="no-underline text-xs text-black md:mr-40 font-lg">It is recommended to read all six cantos before the course begins for a better understanding and maximum benefit.</span>
                    </div>

                    <div className="flex flex-col">
                        <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Proficiency in English: </div>
                        <span className="text-xs text-black md:mr-40 font-lg">As the course will be conducted in English, a good command of the language is mandatory.</span>
                    </div>

                    <div className="flex flex-col">
                        <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Attendance:</div>
                        <span className="text-xs no-underline text-black md:mr-40 font-lg">Maintain a minimum of 75% attendance in live sessions as per ISKCON Board of Examination rules.</span>
                    </div>

                    <div className="flex flex-col">
                        <div className="underline md:text-md text-xs text-black md:py-4 py-2 font-semibold">Recommendation Letter: </div>
                        <span className="text-xs text-black md:mr-40 ">Please submit a recommendation letter from an ISKCON authority (your Spiritual Master/GBC member/Temple President/Co-President) who knows you well, certifying your character, sadhana, Brahminical tendencies, and active engagement in Lord Caitanya Mahaprabhu's preaching mission for at least the previous 12 months.</span>
                    </div>


                    <div className="flex flex-col">
                        <div className="underline md:text-md text-black md:py-4 py-2 font-semibold"></div>
                        <span className="text-xs text-black md:mr-40"></span>
                    </div>

                </div>
            </div>

            {/* FAQ's */}
            <div className="bg-white flex flex-col md:px-60 px-2 py-4 md:py-10">
                <div className="text-black md:text-2xl text-lg font-semibold">Frequently Asked Questions</div>
                <FAQ question={"How to attend a live session ?"} />
            </div>


            {/* Related Courses */}
            <div className="flex flex-col md:px-40 md:mx-10 md:my-10  mx-2 my-4">
                <div className='text-black-500 md:text-3xl text-lg font-semibold md:mb-10 mb-4 '>Related Courses</div>
                <div className="flex flex-row">
                    <Card time={"5 minutes"} />
                    <Card time={"5 minutes"} />
                </div>
            </div>

        </div >
    )
}

export default function Course_detail() {
    useEffect(() => {
        document.title = "course - detail"
    }, [])
    return (
        <>
            <Main
                CourseName={"Bhakti Vaibhav Online (Module-2)"}
                TeacherName={"ISKCON Bhagavata Mahavidyalaya (BV Eng)"}
                price={"5100"}
                isCertificateCourse={true}
                Courseduration={8}
                VideoDuration={12}
                No_of_Session={12}
                sessions_per_week={4}
                Language={"English"}
                Elgibility={"Bhakti Shastri Certified"}
                start_date={"Sep 25, 2023"}
                end_date={"May 13, 2024"}
                start_time={"07:00 PM"}
                end_time={"09:00 PM"}
                start_day={"Monday"}
                end_day={"Thursday"}
                about_teacher={
                    "(डॉ. नेहा वाघ) के हिंदी-मराठी दोनों भाषाओं में कवितासंग्रह, लेख, शोधपत्र आदि प्रकाशित हैं। देवी अहिल्या विश्वविद्यालय इंदौर ने हिंदी साहित्य में शोध के लिए उन्हें Ph.D की उपाधि प्रदान की। अनेक साहित्यिक रचनाओं की प्रस्तुतियों का सूत्रसंचालन एवं लेखन किया। वे वर्ष 2009 से इस्कॉन की सदस्या हैं। वे अनेक जिज्ञासाएं लेकर मंदिर आईं और श्रील प्रभुपाद के ग्रंथ, उपदेश, सेवाभाव, उद्देश्य, ये सब उनके प्रेरणास्रोत बन गए और जीवन की दिशा बदल गई । वर्तमान में वे 'न्यू वैदिक कल्चरल सेंटर इस्कॉन पुणे' तथा 'इस्कॉन भागवत महाविद्यालय गोवर्धन' के लिए सेवा करती हैं।"
                }

            />
        </>
    );
}
