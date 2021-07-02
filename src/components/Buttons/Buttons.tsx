import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import { fonts } from '../../globalStyles/fonts'
=======
import { GaramondWoff } from '../../fonts/Garamond.woff'
import { GaramondWoff2 } from '../../fonts/Garamond.woff2'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Fix(Buttons): Resolving conflict
=======
>>>>>>> Fix(Buttons): Resolving conflicts
=======
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
export interface ButtonsProps {
  label?: string
  learnEnabled?: boolean
  disabled?: boolean
  onClick?: () => void
}

const FirstWrapper = styled.div`
  display: inline-block;
  position: relative;
  background: rgba(252, 70, 43, 0.3);
`
const SecondWrapper = styled.div`
  display: inline-block;
  background: rgba(21, 140, 177, 0.3);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  position: relative;
  top: 6px;
  left: -6px;
=======
=======
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
  position: absolute;
  position: relative;
  top: 6px;
  left: -6px;
}
<<<<<<< HEAD
>>>>>>> Fix(Buttons): Resolving conflict
`
const Button = styled.button<ButtonsProps>`
  ${fonts}
  font-family: 'Garamond', Arial, Helvetica, sans-serif;
  border: none;
<<<<<<< HEAD
=======
  position: absolute;
>>>>>>> Fix(Buttons): Resolving conflict
=======
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
=======
  position: relative;
  top: 6px;
  left: -6px;
<<<<<<< HEAD
=======
>>>>>>> a540368d590003ba6c1a06f211587ea436516a97
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
`
const Button = styled.button<ButtonsProps>`
  @font-face {
    font-family: 'Garamond';
    src: local('Garamond'), local('Garamond'),
      url(${GaramondWoff2}) format('woff2'), url(${GaramondWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
<<<<<<< HEAD

>>>>>>> Fix(Buttons): Resolving conflicts
=======
<<<<<<< HEAD
  position: absolute;
=======

>>>>>>> a540368d590003ba6c1a06f211587ea436516a97
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
  position: relative;
  top: -3px;
  left: 3px;
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Garamond';
<<<<<<< HEAD
  color: ${(props) => (props.learnabled ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.learnabled ? '#041d42' : '#FFFFFF')};
=======
  color: ${(props) => (props.learnEnabled ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.learnEnabled ? '#041d42' : '#FFFFFF')};
>>>>>>> a540368d590003ba6c1a06f211587ea436516a97
  padding: ${(props) =>
<<<<<<< HEAD
    props.learnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.learnabled ? 'none' : '2px solid #041d42')};
=======
  color: ${(props) => (props.learnEnabled ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.learnEnabled ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.learnEnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.learnEnabled ? 'none' : '2px solid #041d42')};
>>>>>>> Fix(Buttons): Resolving conflicts
=======
    props.learnEnabled ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.learnEnabled ? 'none' : '2px solid #041d42')};
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
  cursor: pointer;
  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }
`
const Buttons: React.FC<ButtonsProps> = ({
  label,
  onClick,
  disabled,
  learnEnabled,
  ...props
}) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <Button
          type='button'
<<<<<<< HEAD
          learnabled={learnabled ? true : false}
=======
          learnEnabled={learnEnabled ? true : false}
<<<<<<< HEAD
>>>>>>> Fix(Buttons): Resolving conflicts
=======
>>>>>>> a540368d590003ba6c1a06f211587ea436516a97
>>>>>>> ad221f1a6198566993ed3fa84d8ba2c2baef1cc0
          disabled={disabled}
          onClick={() => ''}
          {...props}>
          {label}
        </Button>
      </SecondWrapper>
    </FirstWrapper>
  )
}
export default Buttons
