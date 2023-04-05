import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SortSelector } from './SortSelector';

export default {
    title: 'features/SortSelector',
    component: SortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SortSelector>;

const Template: ComponentStory<typeof SortSelector> = (args) => <SortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {};