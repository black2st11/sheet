import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './index'



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        checked: {control : 'boolean'},
        disabled: {control: 'boolean'},
        children: {control: 'text'},

    },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};






