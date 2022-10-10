import React from 'react';
import './QuizDetail.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const QuizDetail = ({quiz}) => {
    const {name,logo,total,id}=quiz
    return (
        <div>
        <Col >
          <Card >
            <Card.Img className='card-img ' variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <p><small>Question Number: {total}</small></p>
              </Card.Text>
              <Button>
                <Link className='text-white text-decoration-none' to={`/quiz/${id}`}>Start Quiz</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
    
   

        </div>
    );
};

export default QuizDetail;