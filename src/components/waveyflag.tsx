import React from 'react'
// eslint-disable-next-line no-unused-vars
import type { WaveyProps } from '../interfaces'

export const WaveyFlag = ({ country, fileType, ratio }: WaveyProps) => {
  const splitSize = ratio.split('x')
  const width = splitSize[0]
  const height = splitSize[1]
  const sizes = {
    '2x': `${parseInt(width) * 2}x${parseInt(height) * 2}`,
    '3x': `${parseInt(width) * 3}x${parseInt(height) * 3}`
  }
  if (fileType === 'png') {
    return (
      <img
        src={`https://flagcdn.com/${ratio}/${country}.${fileType}`}
        srcSet={
          parseInt(width) < 128
            ? `https://flagcdn.com/${sizes['2x']}/${country}.${fileType} 2x, https://flagcdn.com/${sizes['3x']}/${country}.png 3x`
            : ''
        }
        width={width}
        height={height}
        alt={country}
      />
    )
  } else {
    return (
      <picture>
        <source
          type='image/webp'
          srcSet={
            parseInt(width) < 128
              ? `https://flagcdn.com/${ratio}/${country}.webp,
      https://flagcdn.com/${sizes['2x']}/${country}.webp 2x,
      https://flagcdn.com/${sizes['3x']}/${country}.webp 3x`
              : `https://flagcdn.com/${ratio}/${country}.webp`
          }
        />
        <source
          type='image/png'
          srcSet={
            parseInt(width) < 128
              ? `https://flagcdn.com/${ratio}/${country}.png,
      https://flagcdn.com/${sizes['2x']}/${country}.png 2x,
      https://flagcdn.com/${sizes['3x']}/${country}.png 3x`
              : `https://flagcdn.com/${ratio}/${country}.png`
          }
        />
        <img
          src={`https://flagcdn.com/${ratio}/${country}.png`}
          width={width}
          height={height}
          alt={country}
        />
      </picture>
    )
  }
}
