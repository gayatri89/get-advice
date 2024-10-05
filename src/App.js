import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  async function getAdvice() {
    const apiUrl = "https://api.adviceslip.com/advice";

    const response = await fetch(apiUrl);
    const data = await response.json();
    setData(data.slip.advice);
  }

  return (
    <div className="App">
      <h1>{data && data}</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}
