import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [infoShow,setinfoshow]=useState(false);
  return(
    <article className='questions'>
      <header>
        <h4>{title}</h4> <button className='btn' onClick={()=>{setinfoshow(!infoShow)}}>{infoShow ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      {infoShow && <p>{info}</p>}
   
    </article>
  )
  return <h2>question component</h2>;
};

export default Question;
