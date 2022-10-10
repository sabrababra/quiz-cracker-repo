import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <Accordion defaultActiveKey="0" className='container my-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is purpose of react router?</Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context API works?</Accordion.Header>
        <Accordion.Body>
          Context API provide a way to share values between components without having to explicity pass a prop through every level of the tree. To avoid prop drilling we can use context API.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Write something about useRef.</Accordion.Header>
        <Accordion.Body>
        The useRef Hook allows you to persist values between renders.

        It can be used to store a mutable value that does not cause a re-render when updated.

        It can be used to access a DOM element directly.


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default Blog;