import React from 'react'
import CircelsBoxCode from '../atoms/CircelsBoxCode'
import TextExampleCole from '../atoms/TextExampleCole'
import ButtonCodeBox from '../atoms/ButtonCodeBox'

import Play from "../../../public/Play.svg"

function CodeExample() {
  return (
    <div className="w-full h-fit max-w-[1093px] bg-bg-box rounded-2xl p-8 flex items-start justify-between" >
        <div className="flex flex-col items-start justify-start gap-y-4">
            <CircelsBoxCode />
            <TextExampleCole />
        </div>
        <div className="flex flex-col items-end justify-end gap-y-10">
            <ButtonCodeBox
                icon={<span>
                    <Play />
                </span>}
            />
            <ButtonCodeBox
                icon={<span>
                    <Play />
                </span>}
            />
        </div>
    </div>
  )
}

export default CodeExample
