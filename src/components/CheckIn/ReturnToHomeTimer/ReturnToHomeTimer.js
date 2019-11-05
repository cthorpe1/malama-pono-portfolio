import React, { useState, useEffect } from "react";

const ReturnToHomeTimer = props => {
  const [seconds, setSeconds] = useState(6);

  useEffect(() => {
    let _isMounted = true;
    let timerID = setInterval(() => tick(), 1000);
    const tick = () => {
      if (_isMounted) {
        if (seconds > 1) {
          setSeconds(c => c - 1);
        } else {
          props.setMessage("");
        }
      }
    };

    return function cleanup() {
      clearInterval(timerID);
      _isMounted = false;
    };
  });

  return (
    <p>
      Returning to Home in <strong>{seconds}</strong> seconds.
    </p>
  );
};

export default ReturnToHomeTimer;
