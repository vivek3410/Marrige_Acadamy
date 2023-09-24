import courseData from "../../data/CourseData";
import titleData from "../../data/TitleData";
import { Card, Cources, ThreeButtons, Title } from "../Elements";
import "./Cources.css";
import React from "react";

function template() {
  return (
    <div className="text-left mt-20 ml-40">
      {titleData.map((title) => (
        <>
          <Title title={title.title} link={title.link} Button={"Course Library"} />
          <ThreeButtons target={title.title} />
          <div className="flex flex-row mr-4">
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
          <Card time={"5 minutes"} />
          </div>

        </>
      ))}
    </div>
  );
};

export default template;
