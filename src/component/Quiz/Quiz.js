import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Question from '../Question/Question';
import NotFound from '../NotFound/NotFound';
const Quiz = () => {
    const quizQstn=useLoaderData().data;
    //console.log(quizQstn);
    const {name,total,logo,questions}=quizQstn;
    return (
        <>
            {
                quizQstn?.name ? <div className='container'>
                <div className='my-3 row align-item-center justify-content-between'>
               <div  className='col-12 col-lg-5 my-auto'>
                <h1>Quiz Topic: {name} </h1>
                <p>Total Question: {total}</p>
                </div> 
                <div className='col-12 col-lg-3'>
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
            className="mySwiper shadow"
          >
            {
                questions?.map(question=><SwiperSlide key={question.id}>
                        <Question
                            
                            questionData={question}
                        ></Question>
                    </SwiperSlide>
                )
            }
            
    
          </Swiper>
            </div>
    
            </div>: <NotFound></NotFound>
            }
        </>
        
    );
};

export default Quiz;