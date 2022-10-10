import React from 'react';
import quiz from '../../Image/quiz.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className='my-5 row align-item-center justify-content-between'>
           <div className='col-12 col-lg-5'>
            <h1>Test your skill </h1>
            <p>These three themes are that quizzes can be used to motivate people, help them remember content they just covered, and to help assess what they learned.</p>
            </div> 
            <div className='col-12 col-lg-3'>
            <img className='banner-img' src={quiz} alt="" />
            </div>
        </div>
    );
};

export default Banner;