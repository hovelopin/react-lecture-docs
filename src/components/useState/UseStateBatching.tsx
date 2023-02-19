// 배칭 예제 다시 풀어보기
import { useState } from 'react';

export default function UseStateBatching() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  function delay(ms: number) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending(pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}
