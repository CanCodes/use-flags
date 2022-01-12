# use-flags

> Country flags from Flagpedia to use in your React project

[![NPM](https://img.shields.io/npm/v/use-flags.svg)](https://www.npmjs.com/package/use-flags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-flags
```

## Flag Types

Flagpedia has 2 different flag types:

- Wavey

  ![Wavey](https://flagcdn.com/160x120/tr.png)

- Flat

  ![Fixed Height](https://flagcdn.com/h120/tr.png)

But for the **Flat** type, there are also two different subtypes:

- Fixed Height
- Fixed Width

## Usage

### Usage of Wavey Flags

`WaveyFlag` requires 3 attributes:

- country (ISO 3166)
- fileType (webp or png)
- ratio

```tsx
import React from 'react'
import { WaveyFlag } from 'use-flags'

const App = () => {
  return <WaveyFlag country='tr' fileType='webp' ratio='256x192' />
}
```

### Usage of Flat Flags

Flat Flags have two subtypes: Fixed Height and Fixed Width.
Both require 3 attributes:

- country (ISO 3166)
- fileType (webp, png, jpeg)
- flagHeight or flagWidth

```tsx
import React from 'react'
import { FixedHeightFlag, FixedWidthFlag } from 'use-flags'

const App = () => {
  return (
    <div>
      <FixedHeightFlag country='tr' fileType='webp' flagHeight='h240' />
      <FixedWidthFlag country='tr' fileType='webp' flagWidth='w2560' />
    </div>
  )
}
```

### SVG Flags

SVG Flags require 2 attributes:

- country (ISO 3166)
- width

```tsx
import React from 'react'
import { SVGFlag } from 'use-flags'

const App = () => {
  return <SVGFlag country='tr' flagWidth='2560' />
}
```

## License

MIT © [CanCodes](https://github.com/CanCodes)
