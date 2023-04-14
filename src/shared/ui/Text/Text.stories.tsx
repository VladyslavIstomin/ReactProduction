import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextAlign, TextSize, TextTheme } from './Text';

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

export const TitleTextL = Template.bind({});
TitleTextL.args = {
    title: 'Title title',
    text: 'Text text text',
    size: TextSize.L
};

export const TitleTextM = Template.bind({});
TitleTextM.args = {
    title: 'Title title',
    text: 'Text text text',
    size: TextSize.M
};

export const TitleTextS = Template.bind({});
TitleTextS.args = {
    title: 'Title title',
    text: 'Text text text',
    size: TextSize.S
};

export const TitleTextCenter = Template.bind({});
TitleTextCenter.args = {
    title: 'Title title',
    text: 'Text text text',
    align: TextAlign.CENTER
};
