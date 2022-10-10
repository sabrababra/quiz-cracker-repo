import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizDetail from '../QuizDetail/QuizDetail';
import './Home.css';
const Home = () => {
    const data=useLoaderData();
    const quizes=data.data;
    return (
        <div className='container'>
            <div className='mt-5'>
            <Banner></Banner>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4 my-5 ">
            {
                quizes.map(quiz=><QuizDetail
                key={quiz.id}
                quiz={quiz}
                ></QuizDetail>)
            }
            </Row>
            
        </div>
    );
};

export default Home;