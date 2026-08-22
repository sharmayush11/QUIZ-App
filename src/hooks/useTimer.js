import { useCallback, useEffect, useState } from "react";

export default function useTimer(seconds) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time <= 0) return undefined;

    const interval = setInterval(() => {
      setTime((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const reset = useCallback(() => setTime(seconds), [seconds]);

  return { time, reset };
}
