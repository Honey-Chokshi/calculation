import React from 'react';
import ReactDOM from 'react-dom';
import sum ,{sub,mul,div}from './App';
import './index.css';


// ReactDOM.render(
//     <>
       
//       <ol>
//       <li>{fname}</li>
//           <li>{myfav}</li>
//           <li>{myName()}</li>
         
//       </ol>
      
//     </>,document.getElementById('root')
// );

ReactDOM.render(
    <>
       <div className="main-div"> 
        <h1>This is calculation</h1>
            <p>This is two number Sum {sum(5,5)}</p> 
        
         <p> This is two number Sub {sub(5,5)} </p>
        
        <p>  This is two number Mul {mul(5,5)}</p>
      <p>This is two number div   {div(5,5)} </p>
        
        
    
    </div>
 
    </>,document.getElementById('root')
);
