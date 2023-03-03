import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { profileReducer } from 'entities/Profile';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template:
    ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...Object.assign({}, args)} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({}, {
        profile: profileReducer
    })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}, {
        profile: profileReducer
    })
];