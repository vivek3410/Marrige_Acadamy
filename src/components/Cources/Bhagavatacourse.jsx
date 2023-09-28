import React from 'react';
import { Card, Coursetile, FilterElt, ThreeButtons } from '../Elements';

export default function Bhagavatacourse() {
    return (
        <>
            <Coursetile title={"ISKCON Board Of Examination Courses"} desc={"ISKCON Certified Courses"} />
            <div className='text-left md:ml-40 ml-2'>
                <ThreeButtons />
                <FilterElt />
                <div className="flex flex-row md:w-[100px] w-[60px]">
                    <Card time={"8 minutes ago"} />
                    <Card time={"5 minutes ago"} />

                </div>
                <div className='text-black-500 md:text-3xl text-xs font-semibold md:m-10 md:ml-4 ml-2 md:mb-6 my-5'>Completed Courses</div>
                <div className="flex flex-row md:w-[100px] w-[60px] md:mb-0 mb-5">
                    <Card time={"5 minutes ago"} />
                    <Card time={"5 minutes ago"} />

                </div>
            </div>
        </>
    )
}
