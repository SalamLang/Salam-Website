import React from 'react'
import TextFooter from '../atoms/TextFooter'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'

function Footer() {
  return (
    <div className="p-9 flex items-center justify-center flex-col gap-y-6 mt-10">
        <div className="w-full flex items-center justify-between">
            <Logo />
            <Button
                text="محیط برنامه "
                variant="buttonBlue"
                type="link"
                href="/"
            />
        </div>
        <hr className="w-full h-1 bg-border-grey" />
        <div className="w-full flex items-center justify-center">
            <TextFooter />
        </div>
    </div>
  )
}

export default Footer