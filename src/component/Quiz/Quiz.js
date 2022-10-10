import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Quiz = () => {
    const quizQstn=useLoaderData().data;
    console.log(quizQstn);
    const {name,total,logo}=quizQstn;
    return (
        <div className='container'>
            <div className='my-5 d-flex align-item-center justify-content-between'>
           <div style={{width:'50%'}} className='my-auto'>
            <h1>Quiz Topic: {name} </h1>
            <p>Total Question: {total}</p>
            </div> 
            <div>
            <img className='banner-img' src={logo} alt="" />
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>

        </div>
    );
};

export default Quiz;