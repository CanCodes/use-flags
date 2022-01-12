import React from 'react'
// eslint-disable-next-line no-unused-vars
import { FWidthProps } from '../interfaces'

export const FixedWidthFlag = ({
  country,
  flagWidth,
  fileType
}: FWidthProps) => {
  const parsedWidth = parseInt(flagWidth.slice(1))
  if (fileType === 'jpeg') {
    return (
      <img
        src={`https://flagcdn.com/${flagWidth}/${country}.jpg`}
        alt={country}
      />
    )
  } else if (fileType === 'png') {
    return (
      <img
        src={`https://flagcdn.com/${flagWidth}/${country}.png`}
        srcSet={
          parsedWidth !== 2560
            ? `https://flagcdn.com/w${parsedWidth * 2}/${country}.png 2x`
            : ''
        }
        width={parsedWidth}
        alt={country}
      />
    )
  } else {
    return (
      <picture>
        <source
          type='image/webp'
          srcSet={
            parsedWidth !== 2560
              ? `https://flagcdn.com/${flagWidth}/${country}.webp,
      https://flagcdn.com/w${parsedWidth * 2}/${country}.webp 2x`
              : `https://flagcdn.com/${flagWidth}/${country}.webp`
          }
        />
        <source
          type='image/png'
          srcSet={
            parsedWidth !== 2560
              ? `https://flagcdn.com/${flagWidth}/${country}.png,
      https://flagcdn.com/w${parsedWidth * 2}/${country}.png 2x`
              : `https://flagcdn.com/${flagWidth}/${country}.png`
          }
        />
        <img
          src={`https://flagcdn.com/${flagWidth}/${country}.png`}
          width={flagWidth}
          alt={country}
        />
      </picture>
    )
  }
}
