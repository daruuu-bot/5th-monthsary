"use client";

import { useEffect, useState } from "react";

import MainScene from "@/components/MainScene";
import Envelope from "@/components/Envelope";
import LoveLetter from "@/components/LoveLetter";

export default function Home() {
  const [month, setMonth] = useState(4);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setMonth(5);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowEnvelope(true);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-8">

      <div className="relative w-[1100px] h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-pink-100">

        {showLetter ? (
          <LoveLetter />
        ) : showEnvelope ? (
          <Envelope onOpen={() => setShowLetter(true)} />
        ) : (
          <MainScene month={month} />
        )}

      </div>

    </div>
  );
}