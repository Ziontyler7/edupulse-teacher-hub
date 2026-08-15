import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { getAmbientTransitions } from "@/lib/ambient-transitions";

interface SingleStageCanvasProps {
  children: React.ReactNode;
}

export function SingleStageCanvas({ children }: SingleStageCanvasProps) {
  const [location] = useLocation();
  const transitions = getAmbientTransitions();

  // Trigger synthesized audio cues on navigation
  useEffect(() => {
    // 1. Play crystal chime on view arrival
    void transitions.triggerChime();

    // 2. Run the deep grounding hum during transition
    void transitions.startDeepHum();
    const t = setTimeout(() => {
      transitions.stopDeepHum();
    }, 900); // Decays right as the transition finishes

    return () => {
      clearTimeout(t);
    };
  }, [location]);

  return (
    <div
      className="w-full h-full min-h-[calc(100vh-4rem)] md:min-h-screen relative overflow-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{
            opacity: 0,
            scale: 0.97,
            z: -120,
            rotateX: 3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            z: 0,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
            z: 120,
            rotateX: -3,
          }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1], // Premium unhurried easing curve
          }}
          className="w-full h-full flex flex-col"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
