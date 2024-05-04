import React from 'react';

const Comp4 = ({arrObj}) => {
    return (
        <>
         <h1>Component to display Array of object</h1>
         <div className='row row-cols-1 row-cols-md-3 g-4'>
         {arrObj.map((element,index)=>{
            return(
                <>
                <div key={index}>
                  <div className='col'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{element.id}</h3>
                            <h3 className="card-title">{element.name}</h3>
                            <h3 className="card-title">{element.age}</h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-lg btn-danger">submit</button>
                        </div>
                    </div>
                  </div>
                </div>
                </>
            )
         })} 
         </div>  
        </>
    );
};

export default Comp4;