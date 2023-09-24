// import "./Home.css";
import React, { useState } from "react";
import { Card, Cources, ThreeButtons, Title } from "../Elements";
import titleData from "../../data/TitleData";
import courseData from "../../data/CourseData";


function SquareCard({ count, title, color }) {
  return (
    <div className={`w-40 bg-white rounded-lg overflow-hidden shadow-lg ml-10`}>
      <div className={`px-4 py-2`}>
        <h3 className={`text-xl text-bold text-${color}-500 text-center`}>{count}</h3>
        <p className="text-gray-400 text-center">{title}</p>
      </div>
    </div>
  );
}

function TestimonialsCard({ title, desc, image }) {
  return (
    <div className="max-w-xs max-auto bg-white rounded-lg overflow-hidden shadow-lg border-orange-500 border-2">
      <img src={image} alt="" className="border-transparent border-full rounded-full h-40 w-40 mx-auto mt-10" />
      <div className="px-6 py-4">
        <div className="text-bold text-center text-xl">{title}</div>
        <p className="text-md mt-5 text-center">{desc}</p>
      </div>
    </div>
  )
}

function Vidcard({ video, title, desc }) {
  return (
    <div className="max-w-xs max-auto overflow-hidden border-transparent shadow-lg rounded-lg ml-20">
      <video controls src={video} className="w-full h-50 object-cover object-center"></video>
      <div className="px-6 py-4">
        <div className="text-bold text-black text-xl">{title}</div>
        <div className="font-semibold text-gray-700 text-md mt-5">{desc}</div>
      </div>
    </div>
  )
}

function Magazinecard(props) {
  return (
    <div className="max-w-xl max-auto overflow-hidden rounded-lg shadow-lg border-transparent rounded-md">
      <div className="px-10 py-10 ">
        <div className="text-bold text-blue-500 text-xl mb-5">Subscribe to our magazine</div>
        <div className="text-black font-semibold">First Name</div>
        <input type="text" className=" w-full border-2 border-black rounded-md mb-5 px-2 py-1 hover:outline-none" placeholder="Enter your First Name" />
        <div className="text-black font-semibold">Last Name</div>
        <input type="text" className="w-full border-2 border-black rounded-md mb-5 px-2 py-1" placeholder="Enter your Last Name" />
        <div className="text-black font-semibold"> Email</div>
        <input type="text" className="w-full border-2 border-black rounded-md mb-5 px-2 py-1" placeholder="Enter your Email" />
        <div className="text-black font-semibold">Phone</div>
        <div className="flex flex-row w-full mb-5">
          <input type="text" className="w-20 h-auto border-2 border-black rounded-tl-md rounded-bl-md px-2 py-1 focus:outline-none" placeholder="Code" />
          <input type="text" className="w-full border-2 border-black rounded-r-md px-2 py-1 focus:outline-none" placeholder="Enter your Mobile Number" />
        </div>
        <button className="bg-yellow-500 border-transparent rounded-md text-black font-semibold px-6 py-2">Subscribe</button>
      </div>
    </div>
  )
}

export default function template() {

  return (
    <div>
      <div
        className=" bg-cover bg-center relative"
        style={{ backgroundImage: `url('/bg-image.jpg')`, height: "400px" }}
      >
        <div className="absolute inset-0 mt-20 flex flex-col justify-center items-center">
          <div className="text-white text-8xl font-bold text-center">
            About Studio
          </div>
          <div className="text-white text-md mt-4">
            <p className="text-center">Srimad Bhagavatam, often referred to as the Bhagavata Purana, is a sacred Hindu scripture and one of the eighteen Mahāpurāṇas. <br /> It consists of 12 books and over 18,000 verses and focuses on the life and teachings of Lord Krishna, illustrating his divine activities, spiritual wisdom, and the path to devotion and enlightenment</p>
          </div>
        </div>
      </div>
      <div className="text-left mt-20 ml-40 ">
        <Title title={"Courses"} link={"/courses"} Button={"View All"} />
        <ThreeButtons />
        <div className="flex flex-row mt-10">
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
        </div>

        <Title title={"Membership-Based Learning Programs"} link={"/membership"} Button={"View All"} />
        <ThreeButtons />
        <div className="flex flex-row mt-10">
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
        </div>

        <Title title={"Workshop"} link={"/workshop"} Button={"View All"} />
        <div className="flex flex-row py-10 justify-around items-center">
          <img src="/sample.png" style={{ width: "600px", height: "400px" }} alt="" />
          <div className="flex flex-col">
            <div className="div text-4xl text-black font-bold px-20">{"Workshop Title 1"}</div>
            <div className="text-md text-black px-20 mt-5">{"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}</div>
            <button className="rounded-full bg-white text-black border-2 px-4 py-2 ml-20 my-5 hover:bg-gray-100" style={{ maxWidth: "160px" }}>Workshop Details</button>
          </div>
        </div>
      </div>

      {/* Testimonals */}

      <div className="bg-gray-50 py-5 mt-20">
        <div className="text-bold text-4xl text-center mt-10 mb-10">Testimonials</div>
        <div className="flex flex-row items-center justify-around">
          <SquareCard count="75k+" title="Active Students" color={"blue"} />
          <SquareCard count="75+" title={"courses"} color={"blue"} />
          <SquareCard count="100K+" title="Community" color={"blue"} />
          <SquareCard count={"42+"} title={"Countries"} color={"blue"} />
        </div>

        <div className="flex flex-row items-center justify-around py-20">
          <TestimonialsCard image={"/gaurangadas.jpeg"} title={"HG Gauranga Prabhu"} desc={"This Bhagavata MahaVidyalaya has a very wonderful role in creating a wonderful environment, ambiance and eco-system for the deep immersion into the study of Srimad Bhagavatham analyzing the various meanings, purports and approaches to each and every verse of Srimad Bhagavatham from different angles by which each and every devotee can increase the appreciation and absorption in krishna"} />
          <TestimonialsCard image={"/gaurangadas.jpeg"} title={"HG Gauranga Prabhu"} desc={"This Bhagavata MahaVidyalaya has a very wonderful role in creating a wonderful environment, ambiance and eco-system for the deep immersion into the study of Srimad Bhagavatham analyzing the various meanings, purports and approaches to each and every verse of Srimad Bhagavatham from different angles by which each and every devotee can increase the appreciation and absorption in krishna"} />
          <TestimonialsCard image={"/gaurangadas.jpeg"} title={"HG Gauranga Prabhu"} desc={"This Bhagavata MahaVidyalaya has a very wonderful role in creating a wonderful environment, ambiance and eco-system for the deep immersion into the study of Srimad Bhagavatham analyzing the various meanings, purports and approaches to each and every verse of Srimad Bhagavatham from different angles by which each and every devotee can increase the appreciation and absorption in krishna"} />

        </div>
        <div className="text-bold text-4xl text-center mb-10">Videos</div>
        <div className="flex flex-row items-center justify-center mb-10">
          <Vidcard video="/sample.mp4" title="H.G. Devakinandan Das speaking about ISKCON Bhagavata Mahavidyalaya" desc="Here is a wonderful opportunity for serving students who are deeply absorbed with studying scriptures." />
          <Vidcard video="/sample.mp4" title="H.G. Devakinandan Das speaking about ISKCON Bhagavata Mahavidyalaya" desc="Here is a wonderful opportunity for serving students who are deeply absorbed with studying scriptures." />
          <Vidcard video="/sample.mp4" title="H.G. Devakinandan Das speaking about ISKCON Bhagavata Mahavidyalaya" desc="Here is a wonderful opportunity for serving students who are deeply absorbed with studying scriptures." />

        </div>
        <div className="flex justify-center">
          <button className="font-semibold text-blue-500 border-2 border-blue-500 rounded-md border-blue hover:bg-blue-50 bg-white py-2 px-4"><a href="https://www.youtube.com/playlist?list=PLSoiyHqcjc8QGqsS9wKkSQbutg1E1WEox">Watch Playlist</a></button>
        </div>
      </div>
      <div className="bg-white mt-10 flex flex-row justify-around items-center mb-20">
        <div className="max-w-xl max-auto px-6 py-4 border-transparent rounded-md">
          <div className="text-yellow-500 text-bold text-lg mb-5">Read, Live and Inspire</div>
          <div className="text-bold text-4xl font-semibold text-black mb-5">Inspire and Elevate yourself every fortnight</div>
          <div className="text-black">This E-Magazine, Nityam Bhāgavata-Sevayā presents the motive of Śrīmad-Bhāgavatam along with the commentaries of great Acharyas like Śrīla Viśvanātha Cakravarti Ṭhākura, Śrīla Bhaktivinoda Ṭhākura, Śrīla Bhakti Siddhānta Saraswati and A.C. Bhaktivedanta Swami Srila Prabhupada.</div>
        </div>
        <div className="m-5"><Magazinecard /></div>
      </div>
    </div>




  );
};



