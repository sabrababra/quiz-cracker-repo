import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoEyeSharp } from 'react-icons/io5';

const Question = ({questionData}) => {
    const {id,options,question,correctAnswer}=questionData;
    return (
        <div className='my-5'>
            <div className='row align-items-center'>
            <h3 className='col-10'>{question} </h3>
            <IoEyeSharp className='col-2 fs-2'></IoEyeSharp>
            </div>
            <Row xs={1} md={2} className='g-4 my-3'>
                {
                    options.map(option=><Col>
                            <button className='btn btn-outline-info p-3'> {option} </button>
                        </Col>)
                }
            </Row>
        </div>
    );
};

export default Question;