"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const FaethStudioIntro = () => {
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out
      ${stage < 2 ? "h-full" : "h-auto"} ${stage >= 1 ? "bg-white" : "bg-black"}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex justify-between items-center">
        <h1
          className={`whitespace-nowrap transition-all duration-1000 ease-in-out
            ${stage < 2 ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl" : "text-2xl"}
            ${stage >= 1 ? "text-black" : "text-white"}
            font-light tracking-[0.15em]`}
          style={{
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          FAETH STUDIO
        </h1>
        {stage >= 2 && (
          <Button variant="outline" className="tracking-widest text-sm border-gray-300">
            CALL US
          </Button>
        )}
      </div>
    </header>
  )
}

export default FaethStudioIntro

