import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Question from '../Question/Question';
const Quiz = () => {
    const quizQstn=useLoaderData().data;
    console.log(quizQstn);
    const {name,total,logo,questions}=quizQstn;
    return (
        <div className='container'>
            <div className='my-5 d-flex align-item-center justify-content-between'>
           <div style={{width:'50%'}} className='my-auto'>
            <h1>Quiz Topic: {name} </h1>
            <p>Total Question: {total}</p>
            </div> 
            <div>
            <img className='quiz-img' src={logo} alt="" />
            </div>
        </div>
        {/* slider */}
        <div>
        <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            questions.map(question=><SwiperSlide key={question.id}>
                    <Question
                        
                        questionData={question}
                    ></Question>
                </SwiperSlide>
            )
        }
        

      </Swiper>
        </div>

        </div>
    );
};

export default Quiz;