import React from 'react';
import "./Comp2.css"
const Comp2 = ({object}) => {
    return (
        <>
           <div className='box1'>
           <h1>Component to display the object</h1>
           <h2>{object.id}</h2> 
           <h2>{object.name}</h2>
           <h2>{object.age}</h2>
           </div>
        </>
    );
};

export default Comp2;