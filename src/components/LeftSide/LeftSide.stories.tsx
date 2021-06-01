import { Story, Meta } from '@storybook/react';
import { LeftSide, LeftSideProps } from "./LeftSide";
import Baobab from '../../images/baobab.jpg'
import Farmer from '../../images/farmer.jpg'


export default {
    title: 'Example/LeftSide',
    component: LeftSide,
} as Meta;

const Template: Story<LeftSideProps> = (args) => <LeftSide {...args} />;

export const View1 = Template.bind({});
View1.args = {
    background: `linear-gradient(0deg, rgba(4, 29, 66, 0.1), rgba(4, 29, 66, 0.1)),url(${Baobab})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    maxWidth: '583.5px',
    height: '607px',
    fontFamily: 'Futura Std'
}

export const View2 = Template.bind({});
View2.args = {
    background: `linear-gradient(0deg, rgba(4, 29, 66, 0.1), rgba(4, 29, 66, 0.1)),url(${Farmer})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    maxWidth: '583.5px',
    height: '607px',
    fontFamily: 'Futura Std'
}
