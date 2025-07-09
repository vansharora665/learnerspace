import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p style={{marginTop: 50}}>⏱️ Time Spent on Site: {seconds} seconds</p>;
}

export default Timer;