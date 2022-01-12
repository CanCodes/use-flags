import React from 'react'

import {
  WaveyFlag,
  FixedHeightFlag,
  SVGFlag,
  FixedWidthFlag
} from 'react-flags'
const App = () => {
  const country = 'fr'
  return (
    <div>
      <WaveyFlag country='cf' fileType='png' ratio='256x192' />
      <br />
      <FixedHeightFlag country={country} fileType='webp' flagHeight='h240' />
      <br />
      <FixedWidthFlag country={country} fileType='webp' flagWidth='w2560' />
      <br />
      <SVGFlag country={country} flagWidth='2560' />
      <br />
    </div>
  )
}

export default App
