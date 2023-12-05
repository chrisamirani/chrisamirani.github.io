import React from "react";
import "./style.css";
export default function Tools({ tools }) {
  return (
    <div className='tools-container'>
      <h4>Technologies:</h4>
      <div className='tools'>
        {tools.map((tool, index) => (
          <img
            key={index}
            className='tool-image'
            src={`/imgs/${tool}.png`}
            alt='programming language'
            title={tool}
          />
        ))}
      </div>
    </div>
  );
}
