import React from 'react';
import './style.css';
import Recursion from './recursion';
import files from '../data/test.json';

const Exmple = ()=>{
  let obj = new Promise((resolve,reject)=>{
    if(1===1){
      resolve("Success")
    }else{
      reject("Failed")
    }
  })
  console.log(obj)
 return <div>Ok</div>
}
export default function App() {
  return (
    <div>
      <Exmple />
      <Recursion key={'a'} files={files} />
    </div>
  );
}
