import React from 'react';

export default function Footer() {
    return (
        <div className="bg-blue-500 p-20">
            <div className="flex flex-row justify-center">
                <div className="max-w-xs max-auto px-10 py-10">
                    <img src="/iskcon-bg.png" alt="" className="w-20 h-20 mb-10" />
                    <button className="bg-white text-blue-500 font-semibold rounded-md px-4 py-2 hover:bg-blue-100 hover:text-blue-500"><a href="https://pages.razorpay.com/pl_IufCYd4r66LK1j/view">Donate</a></button>
                </div>
                <div className="max-w-xl max-h-xl border-lg px-10 py-10">
                    <div className="text-white font-semibold mb-4">USEFUL LINKS</div>
                    <div className="mb-2"><a href="/bhagavata-mahavidyalaya" className="text-white hover:text-blue-700 mb-10">ISKCON Board of Examination</a></div>
                    <div className="mb-2"><a href="/vedavarsity" className="text-white hover:text-blue-700 mb-10">Vedvarsity Courses</a></div>
                    <div className="mb-2"><a href="/self-study" className="text-white hover:text-blue-700 mb-5">Self Study</a></div>
                    <div className="mb-2"><a href="/ancient-wisdom" className="text-white hover:text-blue-700 mb-5">Ancient Wisdom</a></div>
                    <div className="mb-2"><a href="/kids-parents" className="text-white hover:text-blue-700 mb-5">Kids & Parents</a></div>
                    <div className="mb-2"><a href="/events-retreats" className="text-white hover:text-blue-700 mb-5">Events & Retreats</a></div>
                    <div className="mb-2"><a href="#" className="text-white hover:text-blue-700 mb-5">Contact Us</a></div>
                    <div className="mb-2"><a href="#" className="text-white hover:text-blue-700 mb-5">Terms & Conditions</a></div>
                    <div><a href="#" className="text-white hover:text-blue-700 mb-5">Privacy & Policy</a></div>
                </div>
                <div className="max-w-xs max-auto px-10 py-10 border-transparent">
                    <div className="font-semibold mb-4 text-white">SOCIAL</div>
                    <div className="flex flex-row">
                        <a href=""><img src="/insta-icon.png" alt="" className="h-5 w-5 mr-2" /></a>
                        <a href=""><img src="/facebook-icon.png" alt="" className="h-5 w-5 mr-2" /></a>
                        <a href=""><img src="/twitter-icon.png" alt="" className="h-5 w-5 mr-2" /></a>
                        <a href=""><img src="/linkedin-icon.png" alt="" className="h-5 w-5 mr-2" /></a>
                        <a href=""><img src="/whatsapp-icon.png" alt="" className="h-5 w-5 mr-2" /></a>
                        <a href=""><img src="/youtube-icon.png" alt="" className="h-5 w-5 mr-2" /></a>
                    </div>
                </div>

                <div className="max-w-xs max-auto px-10 py-10 border-transparent">
                    <div className="text-white font-semibold">LEARNER APP</div>
                    <a href="https://play.google.com/store/apps/details?id=com.edmingle.iskconbhagavatamahavidyalaya&pli=1"><img src="/playstore-icon.png" alt="" className="" /></a>
                </div>
            </div>

        </div>
    );
}
