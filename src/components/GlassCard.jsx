import { useRef, useEffect } from 'react'

const GlassCard = ({
  children,
  className = '',
  tilt = false,
  glow = false,
  style = {},
  onClick,
}) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!tilt || !cardRef.current) return
    const card = cardRef.current

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [tilt])

  return (
    <div
      ref={cardRef}
      className={`glass-card ${glow ? 'glow-white' : ''} ${className}`}
      style={{
        transition: 'transform 0.15s ease-out, box-shadow 0.4s ease, border-color 0.4s ease',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default GlassCard
