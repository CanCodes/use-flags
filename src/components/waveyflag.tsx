// eslint-disable-next-line no-unused-vars
import type { WaveyProps } from '../types'
import React from 'react'
import { API_URL } from '../constants'

export const WaveyFlag = ({ country, fileType, ratio }: WaveyProps) => {
  const splitSize = ratio.split('x')
  const width = splitSize[0]
  const height = splitSize[1]
  const sizes = {
    '2x': `${parseInt(width) * 2}x${parseInt(height) * 2}`,
    '3x': `${parseInt(width) * 3}x${parseInt(height) * 3}`
  }
  const src = `${API_URL}/${ratio}/${country}.png`

  let srcset: string
  switch (fileType) {
    case 'png':
      srcset =
        parseInt(width) < 128
          ? `${API_URL}/${sizes['2x']}/${country}.${fileType} 2x, ${API_URL}/${sizes['3x']}/${country}.png 3x`
          : ''
      break
    default:
      srcset =
        parseInt(width) < 128
          ? `${API_URL}/${ratio}/${country}.webp,
      ${API_URL}/${sizes['2x']}/${country}.webp 2x,
      ${API_URL}/${sizes['3x']}/${country}.webp 3x`
          : `${API_URL}/${ratio}/${country}.webp`
  }

  return fileType === 'webp' ? (
    <picture>
      <source type='image/webp' srcSet={srcset} />
      <source type='image/png' srcSet={srcset} />
      <img src={src} width={width} height={height} alt={country} />
    </picture>
  ) : (
    <img
      src={src}
      srcSet={srcset}
      width={width}
      height={height}
      alt={country}
    />
  )
}
