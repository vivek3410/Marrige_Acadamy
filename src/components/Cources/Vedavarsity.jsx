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
                <div className="md:w-[100px] w-[60px]">
                    <Card time={"8 minutes ago"} />
                </div>
                <div className='text-black-500 md:text-3xl text-xs font-semibold md:m-10 md:ml-4 ml-2 md:mb-0 my-5'>Completed Courses</div>
                <div className="md:w-[100px] w-[60px] md:mb-0 mb-5">
                    <Card time={"5 minutes ago"} />
                </div>
            </div>
    </>
  );
}
