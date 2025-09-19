import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function InactivityTimer() {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigate("/form");
    }, 10000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [navigate]);

  return null;
}

export default InactivityTimer;
