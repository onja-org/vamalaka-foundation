import { Story, Meta } from '@storybook/react'
import { RoleSelectOnboard } from './RoleSelectionOnBoard'

export default {
  title: 'Components/RoleSelectOnboard',
  component: RoleSelectOnboard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = () => <RoleSelectOnboard />
export const RoleSelectOnBoardStory = Template.bind({})
