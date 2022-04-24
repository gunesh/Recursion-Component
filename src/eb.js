import React, { useState } from 'react';

function Bubbling(props) {
  return (
    <div
      onClick={() => {
        console.log('A');
      }}
    >
      <div
        onClick={() => {
          console.log('B');
        }}
      >
        <div
          onClick={() => {
            console.log('C');
          }}
        >
          <div
            onClick={() => {
              console.log('D');
            }}
          >
            Bubbling
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bubbling;
