// eslint-disable-next-line no-unused-vars
import type { FHeightProps } from '../types'
import React from 'react'
import { API_URL } from '../constants'

export const FixedHeightFlag = ({
  country,
  fileType,
  flagHeight
}: FHeightProps) => {
  const parsedHeight = parseInt(flagHeight.slice(1))
  const src = `${API_URL}/${flagHeight}/${country}.${
    fileType === 'jpeg' ? 'jpg' : 'png'
  }`

  let srcset: string
  switch (fileType) {
    case 'jpeg':
      srcset = ''
      break
    case 'png':
      srcset =
        parsedHeight < 240
          ? `${API_URL}/h${parsedHeight * 2}/${country}.png 2x,
    ${API_URL}/h${parsedHeight * 3}/${country}.png 3x`
          : ''
      break
    default:
      srcset =
        parsedHeight < 240
          ? `${API_URL}/${flagHeight}/${country}.webp,
      ${API_URL}/h${parsedHeight * 2}/${country}.webp 2x,
      ${API_URL}/h${parsedHeight * 3}/${country}.webp 3x`
          : ''
  }
  return fileType === 'webp' ? (
    <picture>
      <source type='image/webp' srcSet={srcset} />
      <source type='image/png' srcSet={srcset} />
      <img src={src} height={parsedHeight} alt={country} />
    </picture>
  ) : (
    <img src={src} srcSet={srcset} alt={country} height={parsedHeight} />
  )
}
