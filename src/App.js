import React, { useState, useEffect } from 'react';
import './style.css';
import Recursion from './recursion';
import files from '../data/test.json';
import Bubbling from './eb'

// function Exmple(){
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('Success!');
//     }, 2000);
//   });
// };
export default function App() {
  const [val, setVal] = useState('Initial State');

  useEffect(() => {
    console.log('Hello');
    var obj = new Promise(function (resolve, reject) {
      // setTimeout(function () {
      //   resolve('Success!');
      // }, 2000);
      if (1 === 1) {
        resolve('Success!');
      } else {
        reject('Failed!');
      }
    });
    obj.then(
      (data) => {
        setVal(data);
      },
      (err) => {
        setVal(err);
      }
    );
  });

  return (
    <div>
      {val}
      <Bubbling />
      <Recursion key={'a'} files={files} />
    </div>
  );
}
