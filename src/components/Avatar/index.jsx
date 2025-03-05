import Image from 'next/image'
import React from 'react'

export const Avatar = ({name, imageSrc}) => {
  return (
    <ul>
      <li>
        <Image src={imageSrc} alt={`Imagem do(a) ${name}`}  width={32} height={32}  />
      </li>
      <li>
        @{name}
      </li>
    </ul>
  )
}
