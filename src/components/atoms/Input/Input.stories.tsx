import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index'
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Select, Space } from 'antd';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Input',
    component: Input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        disabled: {control: 'boolean'},
        value: {control: 'text'},
        maxLength: {control: 'number'},
        status : {control: 'select', options: ['error', 'warning', undefined]},
        type : {control: 'select', options: ['search', 'textarea', 'group', 'password']},
    },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const PrefixSuffix = Template.bind({})

PrefixSuffix.args = {
    prefix: selectBefore,
    suffix: selectAfter
}
