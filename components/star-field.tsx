'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
  direction: number
  twinkleSpeed: number
  baseOpacity: number
}

export default function StarField() {
  const svgRef = useRef<SVGSVGElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const width = window.innerWidth
    const height = window.innerHeight
    const numStars = 300

    // Initialize SVG
    svg.attr('width', width).attr('height', height)

    // Create stars with random positions and movement
    starsRef.current = d3.range(numStars).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.5 + 0.1, // Movement speed
      direction: Math.random() * Math.PI * 2, // Random direction
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      baseOpacity: Math.random() * 0.8 + 0.2,
    }))

    // Bind data and create circles
    const circles = svg
      .selectAll('circle')
      .data(starsRef.current)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.radius)
      .attr('fill', '#38B6F0') // Your blue color
      .attr('opacity', (d) => d.opacity)

    // Animation loop for movement and twinkling
    let time = 0
    const animate = () => {
      time += 0.016 // ~60fps

      circles.each(function (d: Star, i: number) {
        const circle = d3.select(this)
        const star = starsRef.current[i]

        // Update position based on direction and speed
        star.x += Math.cos(star.direction) * star.speed
        star.y += Math.sin(star.direction) * star.speed

        // Wrap around edges
        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        // Twinkling effect
        star.opacity = star.baseOpacity + Math.sin(time * star.twinkleSpeed) * 0.3

        // Update circle position and opacity
        circle
          .attr('cx', star.x)
          .attr('cy', star.y)
          .attr('opacity', Math.max(0.1, Math.min(1, star.opacity)))
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      svg.attr('width', newWidth).attr('height', newHeight)

      // Reposition stars that are out of bounds
      starsRef.current.forEach((star) => {
        if (star.x > newWidth) star.x = newWidth * 0.5
        if (star.y > newHeight) star.y = newHeight * 0.5
      })
    }

    window.addEventListener('resize', handleResize)

    // Start animation
    animate()

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
      if (svgRef.current) {
        d3.select(svgRef.current).selectAll('*').remove()
      }
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

