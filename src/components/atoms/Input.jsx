import React from 'react'

function Input() {
  return (
    <input 
        className="text-text-orange text-xl font-normal h-10 w-[169px] placeholder:text-text-orange bg-transparent border-none outline-none"
        type="text" 
        placeholder="مثال: ۰۹۹۱۳۹۱۵۲۵۴" 
        maxLength={11}
    />
  )
}

export default Input