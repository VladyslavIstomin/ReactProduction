import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectBox } from './SelectBox';

export default {
    title: 'shared/SelectBox',
    component: SelectBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: '1', content: 'Select1' },
        { value: '2', content: 'Select2' },
        { value: '3', content: 'Select3' }
    ],
    value: 'Select',
    label: 'Label'
};

export const Top = Template.bind({});
Top.args = {
    items: [
        { value: '1', content: 'Select1' },
        { value: '2', content: 'Select2' },
        { value: '3', content: 'Select3' }
    ],
    value: 'Select',
    direction: 'top'
};