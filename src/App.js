import { Link, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Cources from './components/Cources';
import Workshop from './components/Workshop';
import Membership from './components/Membership'
import Podcast from './components/Podcast';
import Literature from './components/Literature';
import Coaching from './components/Coaching';
import Bhagavatacourse from './components/Cources/Bhagavatacourse';
import Vedavarsity from './components/Cources/Vedavarsity';
import Selfstudy from './components/Cources/Selfstudy';
import Ancientwisdom from './components/Cources/Ancientwisdom';
import Kidsparents from './components/Cources/Kidsparents';
import Eventsretreats from './components/Cources/Eventsretreats';
import Course_detail from './components/course_details/Course_detail';


function App() {
  return (
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/courses' element = {<Cources />}/>
        <Route path='/workshop' element = {<Workshop />} />
        <Route path='/membership' element = {<Membership />} />
        <Route path='/coaching' element = {<Coaching />} />
        <Route path='/podcast' element = {<Podcast />} />
        <Route path='/literature' element = {<Literature />} />
        <Route path='/bhagavata-mahavidyalaya' element={<Bhagavatacourse/>} />
        <Route path='/vedavarsity' element={<Vedavarsity/>} />
        <Route path='/self-study' element={<Selfstudy/>} />
        <Route path='/ancient-wisdom' element={<Ancientwisdom/>} />
        <Route path='/kids-parents' element={<Kidsparents/>} />
        <Route path='/events-retreats' element={<Eventsretreats/>} />
        <Route path='/course-details' element={<Course_detail/>} />



      </Routes>
  );
}

export default App;
