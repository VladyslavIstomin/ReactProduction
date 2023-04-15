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
Normal.args = {};