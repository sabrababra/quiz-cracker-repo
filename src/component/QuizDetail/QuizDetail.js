import React from 'react';
import './QuizDetail.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
const QuizDetail = ({quiz}) => {
    const {name,logo,total}=quiz
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
              <Button>Start Quiz</Button>
            </Card.Body>
          </Card>
        </Col>
    
   

        </div>
    );
};

export default QuizDetail;