import React from 'react';
import { Card,  Coursetile, FilterElt, ThreeButtons } from '../Elements';

export default function Bhagavatacourse() {
    return (
        <>
            <Coursetile title={"ISKCON Board Of Examination Courses"} desc={"ISKCON Certified Courses"} />
            <div className='text-left ml-40'>
                <ThreeButtons />
                <FilterElt />
                <Card time={"8 minutes ago"} />
                <div className='text-black-500 text-3xl font-semibold m-10 ml-4'>Completed Courses</div>
                <Card time={"5 minutes ago"} />
            </div>
        </>
    )
}
