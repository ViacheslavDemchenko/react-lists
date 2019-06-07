import React from 'react';
import s from './FruitsistSecond.module.css';

export default function FruitsListSecond() {
  const list = {
      "fruits":
      [
          {"name":"banana","url":"https://www.eliquidukstore.com/wp-content/uploads/2014/03/banana-e-liquid-500x500@2x.jpeg"},
          {"name":"mango","url":"https://www.eliquidukstore.com/wp-content/uploads/2015/03/mango-e-liquid-500x500@2x.jpg"},
          {"name":"peach","url":"https://www.eliquidukstore.com/wp-content/uploads/2015/03/peach-e-liquid-500x500@2x.jpg"},
          {"name":"orange","url":"https://images-na.ssl-images-amazon.com/images/I/714LOAKHnfL._SX522_.jpg"},
          {"name":"apple","url":"https://www.eliquidukstore.com/wp-content/uploads/2014/03/apple-e-liquid-500x500@2x.jpg"}
        ]
    }

  const fruitsList = list.fruits.map( (fruit, index) => 
                    <li className={s.listSecondItem} key={index}>
                      <img src={fruit.url} alt={fruit.name} width="150" height="100"></img>
                      <p className={s.listSecondTitle}>{fruit.name}</p>
                    </li>
  )

  

  return (
    <div className={s.listSecondWrap}>
      <ul className={s.listSecond}>
        {fruitsList}
      </ul>
    </div> 
  )
}
