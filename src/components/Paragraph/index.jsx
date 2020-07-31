import React from 'react'

export default function Paragraph({ accent = 'black', children, className, size = 'base', weight = 'normal' }) {
  return (
    <div className={`text-${size} text-${accent} font-${weight} ${className}`}>
      { children }
    </div>
  )
}