import React from 'react'
import { createGlobalStyle } from 'styled-components'
import FuturaStd400 from '../fonts/Futurastd400.woff2'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura Std';
    font-style: normal;
    font-weight: 400;
    src: url(${FuturaStd400});
  }
`