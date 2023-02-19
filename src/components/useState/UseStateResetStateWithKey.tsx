import React, { useState } from "react"

export default function UseStateResetStateWithKey({children} : {children : React.ReactNode}){
  const [name , setName] = useState('Hojin');

  return (
    <div>
      <h2>문자열 업데이트 하기</h2>
      <input 
      value= {name}
      onChange={(e) => {
        setName(e.target.value)
      }}/>
      <p>Hello , {name}</p>
      {children}
    </div>
  )
}