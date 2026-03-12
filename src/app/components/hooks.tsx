// hooks.js — shared React hooks
import { useState, useRef } from "react";

// Triggers when element enters viewport (once)
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Animated number counter
export function useCounter(to, enabled) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let current = 0;
    const increment = to / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) { setValue(to); clearInterval(timer); }
      else setValue(Math.round(current));
    }, 16);
    return () => clearInterval(timer);
  }, [enabled, to]);
  return value;
}