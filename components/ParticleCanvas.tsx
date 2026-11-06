'use client'

import { useEffect, useRef } from 'react'

const OFFSET_X = -0.3
const OFFSET_Y = 0.15
const FRUSTUM = 10
const COUNT = 20000

interface ParticleCanvasProps {
  width: number
  height: number
}

export default function ParticleCanvas({ width, height }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const aspectRatio = width / height
    const scaleX = aspectRatio > 1 ? 1 : aspectRatio
    const scaleY = aspectRatio > 1 ? 1 / aspectRatio : 1
    const positions = new Float32Array(COUNT * 2)
    const velocities = new Float32Array(COUNT * 2)

    for (let i = 0; i < positions.length; i += 2) {
      const radius = Math.abs(Math.random() + Math.random() + Math.random() - 1.5) * 5
      const theta = Math.random() * Math.PI * 2
      const x = Math.cos(theta) * radius * 0.5 + OFFSET_X
      const y = Math.sin(theta) * radius * 0.5 + OFFSET_Y
      const angle = Math.atan2(y - OFFSET_Y, x - OFFSET_X)
      const speed = 0.0015 * (1 - Math.min(1, radius / 5))
      positions[i] = x
      positions[i + 1] = y
      velocities[i] = Math.cos(angle) * speed
      velocities[i + 1] = Math.sin(angle) * speed
    }

    let frame = 0
    const animate = () => {
      const viewW = canvas.clientWidth
      const viewH = canvas.clientHeight
      if (viewW === 0 || viewH === 0) {
        frame = requestAnimationFrame(animate)
        return
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const pixelW = Math.round(viewW * dpr)
      const pixelH = Math.round(viewH * dpr)
      if (canvas.width !== pixelW || canvas.height !== pixelH) {
        canvas.width = pixelW
        canvas.height = pixelH
      }

      const aspect = viewW / viewH
      const left = aspect > 1 ? (-FRUSTUM * aspect) / 2 : -FRUSTUM / 2
      const right = aspect > 1 ? (FRUSTUM * aspect) / 2 : FRUSTUM / 2
      const top = aspect > 1 ? FRUSTUM / 2 : FRUSTUM / (2 * aspect)
      const bottom = aspect > 1 ? -FRUSTUM / 2 : -FRUSTUM / (2 * aspect)
      const worldW = right - left
      const worldH = top - bottom

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, viewW, viewH)
      ctx.globalCompositeOperation = 'lighter'
      ctx.fillStyle = 'rgba(255,255,255,0.4)'

      for (let i = 0; i < positions.length; i += 2) {
        let x = positions[i] + velocities[i] * 0.8
        let y = positions[i + 1] + velocities[i + 1] * 0.8
        const dx = x - OFFSET_X
        const dy = y - OFFSET_Y
        if (dx * dx + dy * dy > (FRUSTUM / 2) * (FRUSTUM / 2)) {
          const angle = Math.random() * Math.PI * 2
          const nextRadius = Math.random() * 1.5
          x = Math.cos(angle) * nextRadius * scaleX + OFFSET_X
          y = Math.sin(angle) * nextRadius * scaleY + OFFSET_Y
          velocities[i] = Math.cos(angle) * 0.0015
          velocities[i + 1] = Math.sin(angle) * 0.0015
        }
        positions[i] = x
        positions[i + 1] = y
        ctx.fillRect(((x - left) / worldW) * viewW, ((top - y) / worldH) * viewH, 1, 1)
      }

      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(frame)
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  )
}
