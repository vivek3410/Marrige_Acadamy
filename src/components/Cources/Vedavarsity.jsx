import React, { useEffect } from 'react';
import { Coursetile, FilterElt, Card, ThreeButtons } from '../Elements';

export default function Vedavarsity() {
  useEffect(() => {
    document.title = "vedavarsity";
  }, [])
  return (
    <>
      <Coursetile title={"Vedavarsity Courses"} desc={"ISKCON Certified Courses"} />
      <div className='text-left md:ml-40 ml-2'>
        <ThreeButtons />
        <FilterElt />
        <div className="flex flex-row  ">
          <Card time={"5 minutes"} title={"Iskcon vadodara (module 2)"} desc={"By Iskcon Bhagavata Mahavidyalaya"} />
          <Card time={"5 minutes"} title={"Iskcon vadodara (module 2)"} desc={"By Iskcon Bhagavata Mahavidyalaya"} />
        </div>
        <div className='text-black-500 md:text-3xl text-xs font-semibold md:m-10 md:ml-4 ml-2 md:mb-6 my-5'>Completed Courses</div>
        <div className="flex flex-row md:mb-0 mb-5">
          <Card time={"5 minutes"} title={"Iskcon vadodara (module 2)"} desc={"By Iskcon Bhagavata Mahavidyalaya"} />
          <Card time={"5 minutes"} title={"Iskcon vadodara (module 2)"} desc={"By Iskcon Bhagavata Mahavidyalaya"} />
        </div>
      </div>
    </>
  );
}
