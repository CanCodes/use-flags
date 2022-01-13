// eslint-disable-next-line no-unused-vars
import type { SVGProps } from '../types'
import React from 'react'
import { API_URL } from '../constants'

export const SVGFlag = ({ country, flagWidth }: SVGProps) => {
  return (
    <img src={`${API_URL}/${country}.svg`} width={flagWidth} alt={country} />
  )
}
