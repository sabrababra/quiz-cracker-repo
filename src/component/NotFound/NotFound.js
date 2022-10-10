import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Image/error.png';
const NotFound = () => {
    return (
        <div style={{height:'80vh'}} >
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{width:'60%'}} src={error} alt="" />
            <Link to='/' className=' text-decoration-none fs-3' >Go back to Home page</Link>
            </div>
            
        </div>
    );
};

export default NotFound;