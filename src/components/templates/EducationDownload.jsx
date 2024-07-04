import React from 'react'
import TitleDescription from '../atoms/TitleDescription'
import Button from '../atoms/Button'
import BoxDownload from '../molecules/BoxDownload'

function EducationDownload() {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
        <TitleDescription title="اولین قدم اینه که میری برای دانلود نرم افزار" />
        <Button
            text="دانلود" 
            variant="buttonOrange" 
        />
        <div className="w-full flex items-center justify-evenly flex-wrap gap-8">
            <BoxDownload variant="Mac" />
            <BoxDownload variant="Android" />
            <BoxDownload variant="Pwa" />
            <BoxDownload variant="Linux" />
            <BoxDownload variant="Windows" />
        </div>
    </div>
  )
}

export default EducationDownload