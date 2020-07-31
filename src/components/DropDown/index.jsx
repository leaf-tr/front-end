import React from 'react'

export default function DropDown({ label, options }) {
  
  return (
    <label className="block mt-4">
      <span className="text-gray-700">{label}</span>
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