"use client"

import { cn } from "@/lib/utils"
import ReactMarquee from "react-fast-marquee"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  speed?: number
  gradient?: boolean
  gradientColor?: string
  gradientWidth?: number | string
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 50,
  gradient = true,
  gradientColor = "white",
  gradientWidth = 200,
  ...props
}: MarqueeProps) {
  return (
    <ReactMarquee
      className={cn("overflow-hidden", className)}
      direction={reverse ? "right" : "left"}
      speed={speed}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      gradientColor={gradientColor}
      gradientWidth={gradientWidth}
      {...props}
    >
      {children}
    </ReactMarquee>
  )
}
