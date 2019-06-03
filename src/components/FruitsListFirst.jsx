import React from 'react';

export default function FruitsListFirst() {
  const list = {
    "fruits": ["banana","peach","orange","apple","mango"]
  }

  const fruitsList = list.fruits.map( (fruit, index) => <li className="list-first__item" key={index}>{fruit}</li>)

  return (
    <div className="list-first-wrap">
      <ul className="list-first">
        {fruitsList}
      </ul>
    </div> 
  );
}


