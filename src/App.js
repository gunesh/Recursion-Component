import React from 'react';
import './style.css';
import Recursion from './recursion';
import files from '../data/test.json';

export default function App() {
  return (
    <div>
      <Recursion files={files} />
    </div>
  );
}
