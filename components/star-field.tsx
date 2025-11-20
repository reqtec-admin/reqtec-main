'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  vx: number // velocity x
  vy: number // velocity y
  twinkleSpeed: number
}

export default function StarField() {
  const svgRef = useRef<SVGSVGElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    let width = window.innerWidth
    let height = window.innerHeight
    const numStars = 400

    // Update SVG dimensions
    svg.attr('width', width).attr('height', height)

    // Create stars with random positions and velocities
    // Create different layers of stars moving at different speeds for depth
    const stars: Star[] = d3.range(numStars).map((i) => {
      const layer = i % 3 // Create 3 layers
      const baseSpeed = layer === 0 ? 0.15 : layer === 1 ? 0.25 : 0.35 // Different speeds per layer
      const angle = Math.random() * Math.PI * 2 // Random direction
      
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: layer === 0 ? Math.random() * 1 + 0.5 : layer === 1 ? Math.random() * 1.5 + 0.8 : Math.random() * 2 + 1,
        opacity: layer === 0 ? Math.random() * 0.5 + 0.3 : layer === 1 ? Math.random() * 0.6 + 0.4 : Math.random() * 0.7 + 0.5,
        vx: Math.cos(angle) * baseSpeed, // horizontal velocity
        vy: Math.sin(angle) * baseSpeed, // vertical velocity
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      }
    })

    // Bind data and create circles
    const circles = svg
      .selectAll('circle')
      .data(stars)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.radius)
      .attr('fill', '#38B6F0') // Your blue color
      .attr('opacity', (d) => d.opacity)

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      svg.attr('width', width).attr('height', height)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      circles.each(function (d: Star) {
        const circle = d3.select(this)
        
        // Update position based on velocity
        d.x += d.vx
        d.y += d.vy

        // Wrap around edges
        if (d.x < 0) d.x = width
        if (d.x > width) d.x = 0
        if (d.y < 0) d.y = height
        if (d.y > height) d.y = 0

        // Update position
        circle.attr('cx', d.x).attr('cy', d.y)

        // Twinkle effect - subtle opacity variation
        const twinkle = Math.sin(Date.now() * d.twinkleSpeed) * 0.3 + 0.7
        const newOpacity = Math.max(0.2, Math.min(1, d.opacity * twinkle))
        circle.attr('opacity', newOpacity)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
      svg.selectAll('*').remove()
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

