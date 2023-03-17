import { useRef } from "react"

export default function UseRefWithDom(){
  const inputRef = useRef<HTMLInputElement>(null);

  const focusOn = () => {
    if(inputRef.current !== null){
      inputRef?.current.focus();
    }
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusOn}>Focus the Input</button>
    </>
  )
}