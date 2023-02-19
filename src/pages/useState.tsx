// 기본적인 사용법
import { useState } from "react";
import UseStateObjectAndArray from "../components/useState/UseStateObjectAndArray";
import UseStateResetStateWithKey from "../components/useState/UseStateResetStateWithKey";
import UseStateUpdater from "../components/useState/UseStateUpdater";

export default function UseState(){
  const [count , setCount] = useState(0);
  const [reset , setReset] = useState(0);
  
  const handleClickCountUp = () => {
    setCount(count + 1);
  }

  const handleClickResetState = () => {
    setReset(count + 1);
  }

  return (
    <>
      <div>
        <h2>카운터 예제</h2>
        <h3>숫자 : {count}</h3>
        <button onClick={handleClickCountUp}>숫자 올리기</button>
        {/* set function 여러번 호출 비교 */}
        <UseStateUpdater />
        <br /><br /><br /><br /><br />
        {/* useState Object and Array */}
        <UseStateObjectAndArray />
        <br /><br /><br /><br /><br />
        <UseStateResetStateWithKey key={reset}>
          <button onClick= {handleClickResetState}>Reset Button</button>
        </UseStateResetStateWithKey>
      </div>
    </>
  )
}