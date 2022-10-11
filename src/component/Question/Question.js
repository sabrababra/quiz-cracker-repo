import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoEyeSharp } from 'react-icons/io5';
import {  toast } from 'react-toastify';
import './Question.css'
const Question = ({questionData,index}) => {
    const {options,question,correctAnswer}=questionData;
    const notify = () => toast(`The correct ans is: "${correctAnswer}"`);
    const handleCorrectAns=(option)=>{
        if(option===correctAnswer){
            toast.success(`"${option}" ans is correct`);
        }else{
            toast.error(`"${option}" ans is wrong`);
        }
    }
    return (
        <div className='my-5 container px-5'>
            <div className='row align-items-center'>
            <h3 className='col-12 col-sm-11'>Question {index+1}: {question} </h3>

            <IoEyeSharp onClick={notify} className='col-12 col-sm-1 fs-1 icon-btn'></IoEyeSharp>
            </div>
           <div className='question-class'>
           <Row xs={1} md={2} className='g-4 my-3 text-start '>
                {
                    options.map((option,index)=><Col key={index}>
                            <input type="radio" name="option" onClick={()=>handleCorrectAns(option)} /> {option} 
                            {/* <button onClick={()=>handleCorrectAns(option)} className='btn btn-outline-info p-3'> {option} </button> */}
                        </Col>)
                }
            </Row>
           </div>
        </div>
    );
};

export default Question;