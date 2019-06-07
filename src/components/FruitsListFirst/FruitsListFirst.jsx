import React from 'react';
import s from './FruitsListFirst.module.css';

export default function FruitsListFirst() {
  const list = {
    "fruits": ["banana","peach","orange","apple","mango"]
  }

  const fruitsList = list.fruits.map( (fruit, index) => <li className={s.listFirstItem} key={index}>{fruit}</li>)

  return (
    <div className={s.listFirstWrap}>
      <ul className={s.listFirst}>
        {fruitsList}
      </ul>
    </div> 
  );
}


