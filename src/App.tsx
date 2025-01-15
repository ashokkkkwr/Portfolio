import React, { useEffect } from "react";
import HomePages from "./pages/Home.pages";
import Lenis from "@studio-freight/lenis";

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling duration
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup Lenis on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <HomePages />
    </>
  );
};

export default App;
