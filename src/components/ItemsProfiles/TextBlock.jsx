import React from 'react'

import Paragraph from '../Paragraph'

export default function TextBlock({ accent, className, textElements, size, weight }) {

  return (
    <div className={`mt-4 ${className}`}>
      {
        textElements.map((text, id) => (
          <Paragraph key={id} accent={accent} size={size} weight={weight}>
          <span>
            {text.label}
          </span>
          {text.content}
        </Paragraph>
        ))
      }
    </div>
  )
}