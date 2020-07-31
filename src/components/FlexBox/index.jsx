import React from 'react'

export default function FlexBox({ children, className, direction = 'row' }) {
  return (
    <div className={`flex flex-${direction} ${className}`}>
      { children }
    </div>
  )
}