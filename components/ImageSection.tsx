import Image from 'next/image'
import React from 'react'

const ImageSection: React.FC = () => {
  return (
    <div>
      <Image
        src="/assets/images/bg/sobre.png"
        width={1100}
        height={1100}
        alt="Network"
      />
    </div>
  )
}

export default ImageSection
