"use client"

import React, { useEffect, useState } from "react"

const IntroAnimation = () => {
  const [stage, setStage] = useState(0) // 0: initial, 1: inverted, 2: moved, 3: complete

  useEffect(() => {
    const invertTimer = setTimeout(() => setStage(1), 1000)
    const moveTimer = setTimeout(() => setStage(2), 2000)
    const completeTimer = setTimeout(() => setStage(3), 3000)

    return () => {
      clearTimeout(invertTimer)
      clearTimeout(moveTimer)
      clearTimeout(completeTimer)
    }
  }, [])

  if (stage === 3) return null

  return (
    <div
      className={`fixed inset-0 w-full h-full z-50 transition-colors duration-1000 ease-in-out
      ${stage >= 1 ? "bg-white" : "bg-black"}`}
    >
      <h1
        className={`fixed whitespace-nowrap transition-all duration-1000 ease-in-out
          ${stage < 2 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" : "top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 text-lg sm:text-xl md:text-2xl"}
          ${stage >= 1 ? "text-black" : "text-white"}
          font-light tracking-[0.15em]`}
        style={{
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        FAETH STUDIO
      </h1>
    </div>
  )
}

export default IntroAnimation

