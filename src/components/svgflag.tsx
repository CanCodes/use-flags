import React from 'react'
// eslint-disable-next-line no-unused-vars
import { SVGProps } from '../interfaces'

export const SVGFlag = ({ country, flagWidth }: SVGProps) => {
  return (
    <img
      src={`https://flagcdn.com/${country}.svg`}
      width={flagWidth}
      alt={country}
    />
  )
}
