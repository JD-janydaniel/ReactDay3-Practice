import React from "react";
import "./Comp3.css";
const Comp3 = ({ array }) => {
  return (
    <>
      <div className="box2">
        <h1>Component to display the Value of an array</h1>
        {array.map((element, index) => {
          return (
            <>
              <div key={index}>
                <h2>{element}</h2>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Comp3;
