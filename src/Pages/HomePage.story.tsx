import { Story, Meta } from '@storybook/react'
import { HomePage } from './HomePage'
import { Props } from '../components/PageFooter/PageFooter'
import footerLinks from '../utils/FooterLinks'

export default {
  title: 'Components/HomePage',
  component: HomePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<Props> = (args) => <HomePage {...args} />
export const HomePageStory = Template.bind({})
HomePageStory.args = { footerLinks }
