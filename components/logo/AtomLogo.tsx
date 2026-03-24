'use client'
import { useEffect, useRef } from 'react'

interface AtomLogoProps {
  size?: number
  dark?: boolean
  className?: string
}

export default function AtomLogo({ size = 80, dark = false, className = '' }: AtomLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>()
  const startRef = useRef<number | null>(null)

  const ink = dark ? '#F5F2EB' : '#1C1C16'
  const bg = dark ? '#1C1C16' : null

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const scale = size / 260
    const rx = 105 * scale
    const ry = 38 * scale
    const eRadius = Math.max(3, 7 * scale)
    const ddSize = Math.round(52 * scale)
    const strokeW = 2.2 * scale
    const orbitAngles = [0, 60, -60]
    const speeds = [0.42, 0.28, 0.56]
    const offsets = [0, 2.1, 4.2]

    function drawEllipse(angleDeg: number) {
      ctx!.save()
      ctx!.globalAlpha = dark ? 0.55 : 0.62
      ctx!.strokeStyle = ink
      ctx!.lineWidth = strokeW
      ctx!.translate(cx, cy)
      ctx!.rotate((angleDeg * Math.PI) / 180)
      ctx!.beginPath()
      ctx!.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
      ctx!.stroke()
      ctx!.restore()
    }

    function frame(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) * 0.001

      ctx!.clearRect(0, 0, size, size)

      if (bg) {
        ctx!.fillStyle = bg
        ctx!.beginPath()
        const r = size * 0.06
        ctx!.roundRect(0, 0, size, size, r)
        ctx!.fill()
      }

      orbitAngles.forEach((ang) => drawEllipse(ang))

      ctx!.globalAlpha = 1
      ctx!.font = `800 ${ddSize}px 'DM Sans', Arial, sans-serif`
      ctx!.fillStyle = ink
      ctx!.textAlign = 'center'
      ctx!.textBaseline = 'middle'
      ctx!.fillText('DD', cx, cy + ddSize * 0.05)

      orbitAngles.forEach((ang, i) => {
        const phase = (t * speeds[i] + offsets[i]) % (Math.PI * 2)
        const ar = (ang * Math.PI) / 180
        const lx = Math.cos(phase) * rx
        const ly = Math.sin(phase) * ry
        const ex = cx + lx * Math.cos(ar) - ly * Math.sin(ar)
        const ey = cy + lx * Math.sin(ar) + ly * Math.cos(ar)
        ctx!.beginPath()
        ctx!.arc(ex, ey, eRadius, 0, Math.PI * 2)
        ctx!.fillStyle = ink
        ctx!.fill()
      })

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [size, dark])

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={className}
    />
  )
}
