import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../globalStyles/fonts'
import { CategoryList, CategoryListProps } from '../CategoryList/CategoryList'

const TopCat = styled.h2`
  ${fonts}
  font-family : 'Futura Std';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: rgba(4, 29, 66, 1);
  margin: 0;
`
const WrapperCategories = styled.div`
  ul {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    flex-wrap: inherit;
    padding: 0;
    button {
      min-width: 214px;
      font-size: 24px;
      padding: 11px 11px 11px 11px;
    }
  }

  ul::-webkit-scrollbar {
    display: none;
  }
`
export const TopCategories: React.FC<CategoryListProps> = ({
  primary,
  categories,
  selectCategory,
}) => {
  return (
    <WrapperCategories>
      <TopCat>Top categories</TopCat>
      <CategoryList
        primary={primary}
        categories={categories}
        selectCategory={selectCategory}
      />
    </WrapperCategories>
  )
}
