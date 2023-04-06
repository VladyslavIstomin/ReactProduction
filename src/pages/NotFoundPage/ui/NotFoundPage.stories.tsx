import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template:
    ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...Object.assign({}, args)} />;

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