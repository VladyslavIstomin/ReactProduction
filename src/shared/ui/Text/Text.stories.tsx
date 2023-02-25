import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleText = Template.bind({});
TitleText.args = {
    title: 'Title title',
    text: 'Text text text'
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'Text text text'
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'Title title',
};

export const TitleTextError = Template.bind({});
TitleTextError.args = {
    title: 'Title title',
    text: 'Text text text',
    theme: TextTheme.ERROR
};
