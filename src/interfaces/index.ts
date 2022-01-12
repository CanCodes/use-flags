// eslint-disable-next-line no-unused-vars
import { COUNTRY_C0DE, ASPECT_RATIO } from '../types'

export interface WaveyProps {
  country: COUNTRY_C0DE
  fileType: 'png' | 'webp'
  ratio: ASPECT_RATIO
}

export interface FHeightProps {
  country: COUNTRY_C0DE
  fileType: 'png' | 'webp' | 'jpeg'
  flagHeight: 'h20' | 'h24' | 'h40' | 'h60' | 'h80' | 'h120' | 'h240'
}

export interface FWidthProps {
  country: COUNTRY_C0DE
  fileType: 'png' | 'webp' | 'jpeg'
  flagWidth:
    | 'w20'
    | 'w40'
    | 'w80'
    | 'w160'
    | 'w320'
    | 'w640'
    | 'w1280'
    | 'w2560'
}

export interface SVGProps {
  country: COUNTRY_C0DE
  flagWidth: string
}
