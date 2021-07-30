import { Story, Meta } from '@storybook/react'
import { HomePage } from './HomePage'

export default {
  title: 'Components/HomePage',
  component: HomePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <HomePage {...args} />
export const HomePageStory = Template.bind({})
