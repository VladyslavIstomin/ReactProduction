import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutPage from './AboutPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar.jpeg';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template:
    ComponentStory<typeof AboutPage> = (args) => <AboutPage {...Object.assign({}, args)} />;

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
