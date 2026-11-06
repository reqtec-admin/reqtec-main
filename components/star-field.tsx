'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  speed: number
  direction: number
  twinkleSpeed: number
  baseOpacity: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resize()

    const stars: Star[] = Array.from({ length: 300 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      baseOpacity: Math.random() * 0.8 + 0.2,
    }))

    let frame = 0
    let time = 0
    const animate = () => {
      time += 0.016
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        star.x += Math.cos(star.direction) * star.speed
        star.y += Math.sin(star.direction) * star.speed
        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0
        const opacity = Math.max(0.1, Math.min(1, star.baseOpacity + Math.sin(time * star.twinkleSpeed) * 0.3))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(254, 254, 254, ${opacity})`
        ctx.fill()
      }
      frame = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resize()
      for (const star of stars) {
        if (star.x > width) star.x = width * 0.5
        if (star.y > height) star.y = height * 0.5
      }
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
