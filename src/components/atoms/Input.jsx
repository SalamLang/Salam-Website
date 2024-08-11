import React from 'react'

function Input() {
  return (
    <input
        className="text-black text-xl font-Estedad-Light h-10 w-[169px] placeholder:text-black bg-transparent border-none outline-none"
        type="text"
        placeholder="مثال: ۰۹۹۱۳۹۱۵۲۵۴"
        maxLength={11}
    />
  )
}

export default Input
