import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './MainPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template:
    ComponentStory<typeof MainPage> = (args) => <MainPage {...Object.assign({}, args)} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({}, {})
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}, {})
];