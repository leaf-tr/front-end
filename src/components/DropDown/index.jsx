import React from 'react'

export default function Dropdown({ label, options }) {
  
  return (
    <label className="block">
      { label &&
        <span className="text-gray-700 mt-4">{label}</span>
      }
      <select className="form-select mt-1 block w-full">
        { options.length &&
          options.map((option, id) => (
            <option key={id}>{option}</option>
          ))
        }
      </select>
    </label>
  )
} 