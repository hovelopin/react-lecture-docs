import { useState } from "react";

export default function UseStateUpdater(){
  const [count , setCount] = useState(0);
  
  const handleClickCountUp = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <>
      <h3>숫자 Updater 함수 : {count}</h3>
      <button onClick={handleClickCountUp}>숫자 올리기</button>
    </>
  )
}