import Image from 'next/image'
import React from 'react'

const ImageParceiro: React.FC = () => {
  return (
    <div>
      <Image
        src="/assets/images/bg/parceiro.png"
        width={1300}
        height={1300}
        alt="Network"
      />
    </div>
  )
}

export default ImageParceiro
