import React from 'react';
import CompA from './Components/CompA/CompA';
import CompB from './Components/CompB/CompB';
import CompC from './Components/CompC/CompC';
import CompD from './Components/CompD/CompD';
import Comp1 from './Components/Comp1/Comp1';
import Comp2 from './Components/Comp2/Comp2';
import Comp3 from './Components/Comp3/Comp3';
import Comp4 from './Components/Comp4/Comp4';

const App = () => {
  const a = 10;
  const obj = {id:1,name:"jany daniel",age:27};
  const arr = [1,2,3,4,5];
  const arrObj =[
    {id:1,name:"jany daniel",age:27},
    {id:2,name:"john duo",age:22},
    {id:3,name:"saran",age:24}
  ]
  return (
    <div>
      <h1>App Component</h1>
      <CompA a={a}/>
      <CompB obj={obj}/>
      <CompC arr={arr}/>
      <CompD arrObj={arrObj}/>
      <Comp1 data={a}/>
      <Comp2 object={obj} />
      <Comp3 array={arr}/>
      <Comp4 arrObj={arrObj}/>
    </div>
  );
};

export default App;