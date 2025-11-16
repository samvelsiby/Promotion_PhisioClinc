'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export default function RevealOnScroll({
  children,
  className,
  direction = 'up',
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.15,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  let offsetClass = ''
  switch (direction) {
    case 'down':
      offsetClass = '-translate-y-6'
      break
    case 'left':
      offsetClass = 'translate-x-6'
      break
    case 'right':
      offsetClass = '-translate-x-6'
      break
    default:
      offsetClass = 'translate-y-6'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${offsetClass}`,
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
