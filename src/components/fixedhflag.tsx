import React from 'react'
// eslint-disable-next-line no-unused-vars
import { FHeightProps } from '../interfaces'

export const FixedHeightFlag = ({
  country,
  fileType,
  flagHeight
}: FHeightProps) => {
  const parsedHeight = parseInt(flagHeight.slice(1))
  if (fileType === 'png')
    return (
      <img
        src={`https://flagcdn.com/${flagHeight}/${country}.png`}
        srcSet={
          parsedHeight < 240
            ? `https://flagcdn.com/h${parsedHeight * 2}/${country}.png 2x,
    https://flagcdn.com/h${parsedHeight * 3}/${country}.png 3x`
            : ''
        }
        height={parsedHeight}
        alt={country}
      />
    )
  else if (fileType === 'jpeg')
    return (
      <img
        src={`https://flagcdn.com/${flagHeight}/${country}.jpg`}
        alt={country}
      />
    )
  else
    return (
      <picture>
        <source
          type='image/webp'
          srcSet={
            parsedHeight < 240
              ? `https://flagcdn.com/${flagHeight}/${country}.webp,
      https://flagcdn.com/h${parsedHeight * 2}/${country}.webp 2x,
      https://flagcdn.com/h${parsedHeight * 3}/${country}.webp 3x`
              : ''
          }
        />
        <source
          type='image/png'
          srcSet={
            parsedHeight < 240
              ? `https://flagcdn.com/${flagHeight}/${country}.png,
      https://flagcdn.com/h${parsedHeight * 2}/${country}.png 2x,
      https://flagcdn.com/h${parsedHeight * 3}/${country}.png 3x`
              : ''
          }
        />
        <img
          src={`https://flagcdn.com/${flagHeight}/${country}.png`}
          height={parsedHeight}
          alt={country}
        />
      </picture>
    )
}
