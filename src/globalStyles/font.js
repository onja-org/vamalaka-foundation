import { css } from 'styled-components'

import FuturaStdWoff from './fonts/futura-std-heavy.woff'
import FuturaStdWoff2 from './fonts/futura-std-heavy.woff2'
import FuturaStdRegularWoff from './fonts/futura-std-400.woff'
import FuturaStdRegularWoff2 from './fonts/futura-std-400.woff2'

export const fonts = css`
  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStdWoff2}) format('woff2'),
      url(${FuturaStdWoff}) format('woff');
    font-weight: 650;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura Std';
    src: local('Futura Std'), local('FuturaStd'),
      url(${FuturaStdRegularWoff2}) format('woff2'),
      url(${FuturaStdRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`
