"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed
        bottom-20
        right-6
        w-11
        h-11
        bg-[#00C9A7]
        text-white
        rounded-full
        shadow-xl
        flex
        items-center
        justify-center
        hover:bg-[#00A7C4]
        hover:scale-110
        transition-all
        duration-300
        z-[999]
      "
    >
      ↑
    </button>
  );
}