import "./Workshop.css";
import React from "react";

function LeftalignedContent(props) {
  const { title1, title2, desc1, desc2 } = props;
  return (
    <>
      <div className="flex flex-row p-10 justify-around items-center">
        <img src="/sample.png" style={{ width: "600px", height: "400px" }} alt="" />
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
    </>
  )
}


function template() {
  return (
    <>
      <LeftalignedContent
        title1={"Workshop Title 1"}
        desc1={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
        title2={"Workshop Title 2"}
        desc2={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
      />
      <LeftalignedContent
        title1={"Workshop Title 3"}
        desc1={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
        title2={"Workshop Title 4"}
        desc2={"Join us for a comprehensive study of Cantos 1 to 6 of the Srimad Bhagavatam in the upcoming Bhakti Vaibhava batch. This course is divided into two modules. Module 1 covers Canto 1, 2, and 3, while Module 2 covers Canto 4, 5, and 6. Successful completion of all assessments in Modules 1 and 2 will earn you a Bhakti Vaibhav degree from the ISKCON Board of Exams."}
      />
    </>
  );
};

export default template;
