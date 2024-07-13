import React from 'react'
import TitleDescription from '../atoms/TitleDescription'
import AvatarGallery from '../organisms/AvatarGallery'

function Users() {
  return (
    <div className="w-full bg-bg-section h-[597px] lg:h-[768px] flex items-center justify-center flex-col gap-y-10 px-4">
        <TitleDescription
            title="ما بهترین هارو داریم ! 🥤"
            description="توی کمترین مدت به دلیل بالا بودن لینک هامون به آدم های مختلف"
        />
        <AvatarGallery />
        <TitleDescription
            description="# و هزاران نفر دیگر"
        />
    </div>
  )
}

export default Users
