// eslint-disable-next-line no-unused-vars
import type { FWidthProps } from '../types'
import React from 'react'
import { API_URL } from '../constants'

export const FixedWidthFlag = ({
  country,
  flagWidth,
  fileType
}: FWidthProps) => {
  const parsedWidth = parseInt(flagWidth.slice(1))
  const src = `${API_URL}/${flagWidth}/${country}.${
    fileType === 'jpeg' ? 'jpg' : 'png'
  }`

  let srcset: string
  switch (fileType) {
    case 'jpeg':
      srcset = ''
      break
    case 'png':
      srcset =
        parsedWidth !== 2560
          ? `${API_URL}/w${parsedWidth * 2}/${country}.png 2x`
          : ''
      break

    default:
      srcset =
        parsedWidth !== 2560
          ? `${API_URL}/${flagWidth}/${country}.webp,
      ${API_URL}/w${parsedWidth * 2}/${country}.webp 2x`
          : `${API_URL}/${flagWidth}/${country}.webp`
  }

  return fileType === 'webp' ? (
    <picture>
      <source type='image/webp' srcSet={srcset} />
      <source type='image/png' srcSet={srcset} />
      <img src={src} width={flagWidth} alt={country} />
    </picture>
  ) : (
    <img src={src} srcSet={srcset} width={parsedWidth} alt={country} />
  )
}
