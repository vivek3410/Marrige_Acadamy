import React, { useEffect } from 'react';
import { Coursetile, FilterElt, Card, ThreeButtons } from '../Elements';

export default function Vedavarsity() {
  useEffect(() => {
    document.title = "vedavarsity";
  },[])
  return (
    <>
      <Coursetile title={"Vedvarsity Courses"} desc={"Authentic and high quality courses, specially created by experienced teachers for deep study of Gaudiya Vaishnava literature."} />
      <div className='text-left ml-40'>
        <ThreeButtons />
        <FilterElt />
        <Card time={"8 minutes"} />
        <div className='text-black-500 text-3xl font-semibold m-10 ml-4'>Completed Courses</div>
        <Card time={"5 minutes"} />
      </div>
    </>
  );
}
