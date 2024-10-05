import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const apiUrl = "https://api.adviceslip.com/advice";

    const response = await fetch(apiUrl);
    const data = await response.json();
    setData(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div className="App">
      <h1>{data && data}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
}
