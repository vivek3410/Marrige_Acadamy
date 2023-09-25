import React from 'react';

export default function Footer() {
    return (
        <div className="bg-blue-500 md:p-20 w-full md:h-xl">
            <div className="flex flex-row justify-center">
                {/* logo */}
                <div className=" md:p-10 md:m-0 my-10 mx-6 flex flex-col items-center">
                    <img src="/iskcon-bg.png" alt="" className="md:w-20 md:h-20 w-10 h-10 mb-4 md:mb-10" />
                    <button className="bg-white text-blue-500 font-semibold rounded-md md:px-4 md:py-2 p-1 md:hover:bg-blue-100 md:text-[16px] text-xs md:hover:text-blue-500"><a href="https://pages.razorpay.com/pl_IufCYd4r66LK1j/view">Donate</a></button>
                </div>
                {/* useful links */}
                <div className="md:p-10 py-4 ml-6">
                    <div className="text-white font-semibold md:text-xl text-[10px] mb-4">USEFUL LINKS</div>
                    <div className="md:mb-2"><a href="/bhagavata-mahavidyalaya" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">ISKCON Board of Examination</a></div>
                    <div className="md:mb-2"><a href="/vedavarsity" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Vedvarsity Courses</a></div>
                    <div className="md:mb-2"><a href="/self-study" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Self Study</a></div>
                    <div className="md:mb-2"><a href="/ancient-wisdom" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Ancient Wisdom</a></div>
                    <div className="md:mb-2"><a href="/kids-parents" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Kids & Parents</a></div>
                    <div className="md:mb-2"><a href="/events-retreats" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-5">Events & Retreats</a></div>
                    <div className="md:mb-2"><a href="#" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Contact Us</a></div>
                    <div className="md:mb-2"><a href="#" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Terms & Conditions</a></div>
                    <div><a href="#" className="text-white text-[8px] md:text-[15px] md:hover:text-blue-700 md:mb-10">Privacy & Policy</a></div>
                </div>
                {/* social */}
                <div className="md:p-10 border-transparent ml-6 p-4">
                    <div className="font-semibold mb-4 text-white md:text-xl text-[10px]">SOCIAL</div>
                    <div className="flex flex-row">
                        <a href=""><img src="/insta-icon.png" alt="" className="md:h-5 md:w-5 h-3 mr-2" /></a>
                        <a href=""><img src="/facebook-icon.png" alt="" className="md:h-5 md:w-5 h-3 mr-2" /></a>
                        <a href=""><img src="/twitter-icon.png" alt="" className="md:h-5 md:w-5 h-3 mr-2" /></a>
                        <a href=""><img src="/linkedin-icon.png" alt="" className="md:h-5 md:w-5 h-3 mr-2" /></a>
                        <a href=""><img src="/whatsapp-icon.png" alt="" className="md:h-5 md:w-5 h-3 mr-2" /></a>
                        <a href=""><img src="/youtube-icon.png" alt="" className="md:h-5 md:w-5 h-3 mr-2" /></a>
                    </div>
                </div>

                <div className="hidden md:flex md:flex-col md:max-w-xs md:max-auto md:p-10 md:border-transparent">
                    <div className="text-white font-semibold md:text-xl text-xs">LEARNER APP</div>
                    <a href="https://play.google.com/store/apps/details?id=com.edmingle.iskconbhagavatamahavidyalaya&pli=1"><img src="/playstore-icon.png" alt="" className="md:w-40" /></a>
                </div>
            </div>
            <div className="md:hidden md:flex md:flex-col md:max-w-xs md:max-auto md:p-10 md:border-transparent ml-2">
                <div className="text-white font-semibold md:text-xl text-[8px]">LEARNER APP</div>
                <a href="https://play.google.com/store/apps/details?id=com.edmingle.iskconbhagavatamahavidyalaya&pli=1"><img src="/playstore-icon.png" alt="" className="md:w-40 w-20" /></a>
            </div>


        </div>
    );
}
