import { createGlobalStyle } from 'styled-components'
import FuturaStd400woff2 from './fonts/futurastd400woff2.woff2'
import FuturaStd400woff from './fonts/futurastd400woff.woff'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura Std';
    font-style: normal;
    font-weight: 400;
    src: local('Futura Std'), local('FuturaStd'),
    url(${FuturaStd400woff2}) format('woff2'),
    url(${FuturaStd400woff}) format('woff');
  }
`