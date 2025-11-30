import React, { useState } from 'react';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


export default function RandomName() {
  const [name, setName] = useState('');

  const generateName = () => {
    const randomName = uniqueNamesGenerator({
      dictionaries: [animals],
   
    });
    setName(randomName);
  };

  return (
    <div className="random-box">

      <h1>Random Name Generator</h1>
      <h2>{name}</h2>
      <button onClick={generateName}>Generate Random Name</button>
    </div>
  );
}
