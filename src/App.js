import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleSimplex from 'simple-simplex'

function App() {
  const solver = new SimpleSimplex({
    objective: {
      a: 70,
      b: 210,
      c: 140,
    },
    constraints: [
      {
        namedVector: { a: 1, b: 1, c: 1 },
        constraint: '<=',
        constant: 100,
      },
      {
        namedVector: { a: 5, b: 4, c: 4 },
        constraint: '<=',
        constant: 480,
      },
      {
        namedVector: { a: 40, b: 20, c: 30 },
        constraint: '<=',
        constant: 3200,
      },
    ],
    optimizationType: 'max',
  });
   
  // call the solve method with a method name
  const result = solver.solve({
    methodName: 'simplex',
  });
   
  // // see the solution and meta data
  // console.log({
  //   solution: result.solution,
  //   isOptimal: result.details.isOptimal,
  // });
  return (
    <div className="App">
        <button onClick={() => {console.log(result)}}>holis</button>
        <div>
          {'isOptimal ' + result.details.isOptimal}
        </div>
    </div>
  );
}

export default App;
