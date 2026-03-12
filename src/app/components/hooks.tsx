// // hooks.js — shared React hooks
// import { useState, useRef, useEffect } from "react";

// // Triggers when element enters viewport (once)
// export function useInView(threshold = 0.12) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// // Animated number counter
// export function useCounter(to, enabled) {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     if (!enabled) return;
//     let current = 0;
//     const increment = to / 60;
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= to) { setValue(to); clearInterval(timer); }
//       else setValue(Math.round(current));
//     }, 16);
//     return () => clearInterval(timer);
//   }, [enabled, to]);
//   return value;
// }

"use client";

// hooks.ts — shared React hooks
import { useState, useRef, useEffect } from "react";

/**
 * Hook: Detect when element enters viewport
 */
export function useInView(threshold: number = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, inView] as const;
}

/**
 * Hook: Animated number counter
 */
export function useCounter(to: number, enabled: boolean) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (!enabled) return;

    let current = 0;
    const increment = to / 60;

    const timer = setInterval(() => {
      current += increment;

      if (current >= to) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(Math.round(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [enabled, to]);

  return value;
}