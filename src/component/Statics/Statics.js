import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Statics.css';
import {  CartesianGrid, XAxis, YAxis, Tooltip,  BarChart, Legend, Bar, AreaChart, Area, PieChart, Pie } from 'recharts';

const Statics = () => {
    const data = useLoaderData();
    const quizes = data.data;
    return (
        <div style={{height:'80vh'}} className='container'>
            <h3 className='text-center my-4'>Quiz Chart</h3>
            <Row xs={1} lg={3} className='gy-4'>
                <Col>
                    {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <AreaChart
                            width={300}
                            height={300}
                            data={quizes}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    {/* </ResponsiveContainer> */}

                </Col>

                <Col>

                    {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <BarChart
                            width={300}
                            height={300}
                            data={quizes}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#82ca9d" />
                        </BarChart>
                    {/* </ResponsiveContainer> */}
                </Col>
                <Col>
                <PieChart width={300} height={300}>
          <Pie data={quizes} dataKey="total" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={quizes} dataKey="total" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip></Tooltip>
        </PieChart>
                </Col>
            </Row>
        </div>
    );
};

export default Statics;