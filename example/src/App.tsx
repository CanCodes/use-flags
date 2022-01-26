import React from 'react'

import { WaveyFlag, FixedHeightFlag, SVGFlag, FixedWidthFlag } from 'use-flags'
const App = () => {
  const country = 'fr'
  return (
    <div>
      <WaveyFlag country='cf' fileType='webp' ratio='256x192' />
      <br />
      <FixedHeightFlag country={country} fileType='jpeg' flagHeight='h240' />
      <br />
      <FixedWidthFlag country={country} fileType='webp' flagWidth='w2560' />
      <br />
      <SVGFlag country={country} flagWidth='2560' />
      <br />
    </div>
  )
}

export default App
