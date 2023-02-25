import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Lang = Template.bind({});
Lang.args = {};

export const Short = Template.bind({});
Short.args = {
    short: true
};