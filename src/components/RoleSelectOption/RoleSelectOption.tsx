import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import arrowRightIcon from '../../stories/assets/arrow-right.svg'
import darkPolygonBg from '../../stories/assets/dark-polygon.svg'
import whitePolygonBg from '../../stories/assets/white-polygon.svg'

export interface OptionProps {
  label: string
  text: string
  src: string
  hoveredSrc: string
  alt?: string
  setRoleSelected: (text: string) => void
}

const polygonBg = css`
  background-repeat: no-repeat;
  max-width: 426px;
  padding-block-end: 16px;
  padding-block-start: 16px;
  padding-inline-end: 16px;
  padding-inline-start: 16px;
`

const optionWrapperStyles = css`
  ${fonts}
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline-start: 8px;
  padding-block-start: 10px;
  padding-block-end: 4px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
`

export const RoleSelectOption: React.FC<OptionProps> = ({
  label,
  text,
  src,
  hoveredSrc,
  alt,
  setRoleSelected,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div onClick={() => setRoleSelected(label)}>
      <RoleSelectBackground
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div>
          <img src={isHovered ? src : hoveredSrc} alt={alt} />
        </div>
        <TextWrapper>
          <LabelStyle>{label}</LabelStyle>
          <Text>{text}</Text>
        </TextWrapper>
        <ArrowRightWrapper onClick={() => null}>
          <img
            src={isHovered ? arrowRightIcon : ''}
            alt={isHovered ? 'arrow' : ''}
          />
        </ArrowRightWrapper>
      </RoleSelectBackground>
    </div>
  )
}

const TextWrapper = styled.div`
  @media (max-width: 360px) {
    text-align: center;
    margin: 0;
  }
  @media (max-width: 476px) {
    max-width: 150px;
  }
`
const ArrowRightWrapper = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: end;
  padding-inline-end: 8px;
  padding-inline-start: 0;
`
export const LabelStyle = styled.h6`
  font-family: 'Futura Std';
  font-size: 16px;
  line-height: 19px;
  margin-block-start: 16px;
  margin-block-end: 0;
  color: #041d42;
  text-align: left;
`
export const Text = styled.p`
  max-width: 161px;
  font-size: 14px;
  line-height: 17px;
  margin-block-start: 4px;
  color: #979797;
  text-align: left;
`

const RoleSelectBackground = styled.div`
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  ${optionWrapperStyles}

  div:first-child {
    background-image: url(${whitePolygonBg});
    ${polygonBg}
  }

  &:hover {
    background-color: #f5f9ff;
    border: 1px solid #041d42;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);

    div:first-child {
      background-image: url(${darkPolygonBg});
      ${polygonBg}
    }
  }
`
