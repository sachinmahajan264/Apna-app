import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Counter() {
    const [number,setCounter]=useState(0);
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response=>response.json())
      .then(data=>setData(data))
     .catch(error=>console.error('error',error)
     
     
     )
    },);
    
    const onsubmitdata=()=>{
      setCounter(number+1);
      
    }
  return (
    <div style={{marginTop:'60px'}}>
      <div>
        <h1>data fetch Api</h1>
        <ul>{data.map(item=>(
          <li type='A' key={item.id}>{item.name}-{item.email}<p>{item.body}</p></li>
        ))}</ul>
      </div>
      <h1>{number}</h1>
      <button type='button' onClick={onsubmitdata}>counter</button>
    </div>
  )
}
