import { Story, Meta } from '@storybook/react'
import { CategoryListProps } from '../CategoryList/CategoryList'
import { TopCategories } from './TopCategories'

export default {
  title: 'Components/TopCategories',
  component: TopCategories,
} as Meta

const categories = [
  { id: '1', title: 'Food' },
  { id: '2', title: 'Handmade' },
  { id: '3', title: 'Spices' },
  { id: '5', title: 'Clothing' },
  { id: '4', title: 'Collectibles' },
  { id: '6', title: 'Everything' },
]

const Template: Story<CategoryListProps> = (args) => <TopCategories {...args} />
export const ButtonCat = Template.bind({})
ButtonCat.args = {
  categories: categories,
  primary: true,
}
