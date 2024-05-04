import React from 'react';
import "./CompB.css"
const CompB = ({obj}) => {
    return (
        <>
        <h1 classNameName='head'>Hello</h1>
       <h2>Name: {obj.name}</h2> 
        <h2>Age: {obj.age}</h2>
        </>
    );
};

export default CompB;