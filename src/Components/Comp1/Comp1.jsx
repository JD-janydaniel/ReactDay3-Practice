import React from 'react';
import "./Comp1.css"
const Comp1 = ({data}) => {
    return (
        <>
        <div className='box'>
         <h1>Compenent 1 to display a single data</h1>
         <h2>The value of a is: {data}</h2>
         </div>   
        </>
    );
};

export default Comp1;