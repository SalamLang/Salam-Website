import React from 'react'

function ButtonCodeBox({ icon }) {
  return (
    <button className="w-14 h-14 md:w-16 md:h-16 bg-bg-button-orange rounded-xl flex items-center justify-center cursor-pointer">
        {icon}
    </button>
  )
}

export default ButtonCodeBox