import Image from 'next/image'
import React from 'react'

const ImageDashboard: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-2/3">
      <Image
        src="/assets/images/bg/bgimgd.png"
        width={750}
        height={1900}
        alt={'background'}
      />
    </div>
  )
}

export default ImageDashboard
