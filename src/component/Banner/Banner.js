import React from 'react';
import quiz from '../../Image/quiz.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className='my-5 d-flex align-item-center justify-content-between'>
           <div style={{width:'50%'}}>
            <h1>Lorem ipsum </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laboriosam culpa, asperiores soluta debitis totam non pariatur veniam suscipit numquam tenetur ad a velit. Recusandae natus iste ut corporis voluptate.</p>
            </div> 
            <div>
            <img className='banner-img' src={quiz} alt="" />
            </div>
        </div>
    );
};

export default Banner;