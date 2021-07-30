import { Story, Meta } from '@storybook/react'
import Button from './Button'
import { ButtonsProps } from './Button'

export default {
  title: 'Components/Buttons',
  component: Button,
} as Meta

const ButtonStorybook: Story<ButtonsProps> = (args) => <Button {...args} />
export const LearnEnabled = ButtonStorybook.bind({})
LearnEnabled.args = {
  isPrimary: true,
  label: 'Learn more',
}
export const LearnDisabled = ButtonStorybook.bind({})
LearnDisabled.args = {
  isPrimary: true,
  disabled: true,
  label: 'Learn more',
}
export const Trust = ButtonStorybook.bind({})
Trust.args = {
  isPrimary: false,
  label: 'Can you trust us?',
}
