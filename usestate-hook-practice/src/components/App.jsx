import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  // console.log(now);
  setInterval(newTime, 1000);
  const [time, getTime] = useState(now);

  function newTime() {
    const nowTime = new Date().toLocaleTimeString();
    getTime(nowTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
