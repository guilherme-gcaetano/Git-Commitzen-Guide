import React from 'react'

export default function Input({id, label, type, placeholder, onChange}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  )
}
