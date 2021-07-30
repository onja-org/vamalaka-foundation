import { initial } from 'cypress/types/lodash'
import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
export interface ButtonsProps {
  label?: string
  isPrimary?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  buttonIcon?: JSX.Element
}
const FirstWrapper = styled.div`
  display: inline-flex;
  background: rgba(252, 70, 43, 0.3);
`
const SecondWrapper = styled.div`
  transform: translate(-6px, 6px);
  background: rgba(21, 140, 177, 0.3);
`
const ButtonStyle = styled.button<ButtonsProps>`
  ${fonts}
  transform: translate(3px, -3px);
  outline: none;
  font-size: 24px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Garamond';
  color: ${(props) => (props.isPrimary ? '#FFFFFF' : '#041d42')};
  background-color: ${(props) => (props.isPrimary ? '#041d42' : '#FFFFFF')};
  padding: ${(props) =>
    props.isPrimary ? '12px 20px 11px 20px' : '12px 28px 11px 28px'};
  border: ${(props) => (props.isPrimary ? 'none' : '2px solid #041d42')};
  cursor: pointer;

  display: flex;
  gap: 6px;
  align-items: center;

  &:disabled {
    color: '#FFFFFF';
    cursor: not-allowed;
    background-color: gray;
  }
`
const Button: React.FC<ButtonsProps> = ({
  label,
  onClick,
  disabled,
  isPrimary,
  type,
  buttonIcon,
  ...props
}) => {
  return (
    <FirstWrapper>
      <SecondWrapper>
        <ButtonStyle
          type={type}
          isPrimary={isPrimary ? true : false}
          disabled={disabled}
          onClick={() => ''}
          {...props}>
          {buttonIcon}
          {label}
        </ButtonStyle>
      </SecondWrapper>
    </FirstWrapper>
  )
}
export default Button
