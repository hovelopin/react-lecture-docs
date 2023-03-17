import { useRef, useState } from "react"

export default function UseRef(){
  const [count , setCount] = useState(0);
  const countRef = useRef(0);

  const countUp = () => {
    setCount(count + 1);
  }

  console.log('여기가 useState 값입니다.' , count);

  const countUpWithRef = () => {
    countRef.current = countRef.current + 1;
    console.log('여기가 useRef current 값입니다.' , countRef.current);
  }

  return (
    <>
      <p>useState Count : {count}</p>
      <button onClick ={countUp}>useState Count Up!</button>

      <p>useRef Count : {countRef.current}</p>
      <button onClick ={countUpWithRef}>useRef Count Up!</button>
    </>
  )
}