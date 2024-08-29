import React from 'react'
import SecondHeader from '../templates/SecondHeader'
import { Alert } from '../common/Alert'
import Footer from '../templates/Footer'

export default function NotFoundLayout({children}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-start">
          <SecondHeader />
          <Alert
            intent="orange"
            size="medium"
            className="min-h-[60px] md:min-h-[65px] lg:!min-h-[70px] flex justify-center items-center"
          >
            به دنیای سلام خوش اومدی اینجا دیگه هیچ محدودیتی نداری
          </Alert>
          <div className="w-full h-full flex flex-col flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
