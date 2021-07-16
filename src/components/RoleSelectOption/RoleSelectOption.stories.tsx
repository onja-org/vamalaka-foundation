import { Story, Meta } from '@storybook/react'
import { RoleSelectOption, OptionProps } from './RoleSelectOption'
import userIcon from '../../stories/assets/user.svg'
import userIconHovered from '../../stories/assets/userNotHovered.svg'
import briefcaseIcon from '../../stories/assets/briefcase.svg'
import briefcaseIconHovered from '../../stories/assets/briefcaseNotHovered.svg'

export default {
  title: 'Components/RoleSelectOption',
  component: RoleSelectOption,
} as Meta

const Template: Story<OptionProps> = (args) => {
  return <RoleSelectOption {...args} />
}

export const Buyer = Template.bind({})
Buyer.args = {
  label: 'Buyer',
  text: 'Personal account to manage all you activities.',
  src: userIcon,
  hoveredSrc: userIconHovered,
  alt: 'User icon',
  setRoleSelected: () => {},
}

export const Seller = Template.bind({})
Seller.args = {
  label: 'Seller',
  text: 'Own or belong to a company, this is for you.',
  src: briefcaseIcon,
  hoveredSrc: briefcaseIconHovered,
  alt: 'Briefcase icon',
  setRoleSelected: () => {},
}
