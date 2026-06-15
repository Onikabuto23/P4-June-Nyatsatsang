"use client";

import { useState } from "react";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Jigtrel N Web Design final&nbsp;</span>

        <br />

        <div className={subtitle({ class: "mt-4" })}>J.W.N. Period 4</div>
      </div>
    </section>
  );
}
