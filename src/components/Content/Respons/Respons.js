import React from 'react';
import { RMsgs } from './RMsgs/RMsgs';
import s from './Respons.module.css';
import cat1 from '../../../pic/cat1.jpg'


export const Respons = () => {
  return (
    <div className={s.RMsgs}>
      <div className={s.RMsg}>
        <div  className={s.RAvaInf}>
        <img src={cat1}></img>
        </div>
        <span>Likes 2</span>
        < RMsgs/>
      </div>
    
    
    </div>
  )
}