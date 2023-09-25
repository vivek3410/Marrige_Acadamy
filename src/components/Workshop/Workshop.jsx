import "./Workshop.css";
import React, { useEffect, useState } from "react";

function Workshop(props) {

  const { title1, title2, desc1, desc2 } = props;
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setisMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      {isMobile ? (
        <>
          <div className="flex flex-row md:py-10 mt-4 justify-between md:justify-around items-center ">
            <img src="/sample.png" className="md:w-[600px] md:h-[400px] w-[200px] h-[100px]" alt="" />
            <div className="flex flex-col">
              <div className="div md:text-4xl text-[10px] text-black font-bold md:px-20 px-4">{title1}</div>
              <div className="md:text-[15px] text-[8px]  text-black md:px-20 px-4 mt-5">{desc1}</div>
              <button className="rounded-full bg-white text-black border-2 md:px-4 md:py-2 md:ml-20 md:my-5 md:text-[15px] text-[8px] md:max-w-[160px] w-[70px] md:w-[200px] md:hover:bg-gray-100 ml-4 p-[2px] mt-6" >Workshop Details</button>
            </div>
          </div>
          <div className="flex flex-row md:py-10 mt-4 justify-between md:justify-around items-center mb-5">
            <div className="flex flex-col">
              <div className="div md:text-4xl text-[10px] text-black font-bold md:px-20 px-4">{title2}</div>
              <div className="md:text-[15px] text-[8px]  text-black md:px-20 px-4 mt-5">{desc2}</div>
              <button className="rounded-full bg-white text-black border-2 md:px-4 md:py-2 md:ml-20 md:my-5 md:text-[15px] text-[8px] md:max-w-[160px] w-[70px] md:w-[200px] md:hover:bg-gray-100 ml-4 p-[2px] mt-6" >Workshop Details</button>
            </div>
            <img src="/sample.png" className="md:w-[600px] md:h-[400px] w-[200px] h-[100px]" alt="" />
          </div>
        </>
      ) : (<>
        <div className="flex flex-row md:p-10 md:justify-around items-center">
          <img src="/sample.png" className="md:w-[600px] md:h-[400px] w-[100px] m-5" alt="" />
          <div className="flex flex-col">
            <div className="div text-4xl text-black font-bold px-20">{title1}</div>
            <div className="text-md text-black px-20 mt-5">{desc1}</div>
            <button className="rounded-full bg-white text-black border-2 px-4 py-2 ml-20 my-5 hover:bg-gray-100" style={{ maxWidth: "160px" }}>Workshop Details</button>
          </div>
        </div>
        <div className="flex flex-row p-10 justify-around items-center">
          <div className="flex flex-col">
            <div className="div text-4xl text-black font-bold px-20">{title2}</div>
            <div className="text-md text-black px-20 mt-5">{desc2}</div>
            <button className="rounded-full bg-white text-black border-2 px-4 py-2 ml-20 my-5 hover:bg-gray-100" style={{ maxWidth: "160px" }}>Workshop Details</button>
          </div>
          <img src="/sample.png" style={{ width: "600px", height: "400px" }} alt="" />
        </div>
      </>)}

    </>
  )
}


function template() {
  return (
    <>
      <Workshop
        title1={"Workshop Title 1"}
        desc1={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
        title2={"Workshop Title 2"}
        desc2={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
      />
      <Workshop
        title1={"Workshop Title 3"}
        desc1={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
        title2={"Workshop Title 4"}
        desc2={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
      />
    </>
  );
};

export default template;
