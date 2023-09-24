import React from 'react';
import { Card, Cources, Coursetile, FilterElt, ThreeButtons } from '../Elements';
export default function Kidsparents() {
    return (
        <>
            <Coursetile title={"Kids & Parents Courses"} />
            <div className='text-left ml-40'>
                <ThreeButtons />
                <FilterElt />
                <Card time={"8 minutes ago"} />
                <div className='text-black-500 text-3xl font-semibold m-10 ml-4'>Completed Courses</div>
                <Card time={"5 minutes ago"} />
            </div>
        </>
    );
}
