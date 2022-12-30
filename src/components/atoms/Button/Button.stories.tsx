import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PoweroffOutlined } from '@ant-design/icons';

import Button from './index'



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        type: {control:'select', options: ['primary', 'text', 'dashed', 'link', undefined]},
        disabled: {control: 'boolean'},
        danger: {control: 'boolean'},
        children: {control: 'text'},
        size: {control: 'select', options: ['large', 'middle', 'small', undefined]}

    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const IconButton = Template.bind({})

IconButton.args = {
    icon : <PoweroffOutlined />
}


