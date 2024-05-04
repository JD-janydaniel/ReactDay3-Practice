import React from "react";

const CompD = ({ arrObj }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {arrObj.map((element, index) => {
          return (
            <>
              <div key={index}>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{element.id}</h4>
                      <h4 className="card-title">{element.name}</h4>
                      <h4 className="card-title">{element.age}</h4>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-danger ">Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CompD;
