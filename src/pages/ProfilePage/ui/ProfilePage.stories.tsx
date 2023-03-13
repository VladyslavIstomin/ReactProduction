import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar.jpeg';

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
        profile: {
            form: {
                first: 'sef',
                lastname: 'sds',
                age: 23,
                currency: Currency.RUB,
                country: Country.UKRAINE,
                city: 'Lviv',
                username: 'wef',
                avatar
            }
        }
    })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}, {
        profile: {
            form: {
                first: 'sef',
                lastname: 'sds',
                age: 23,
                currency: Currency.RUB,
                country: Country.UKRAINE,
                city: 'Lviv',
                username: 'wef',
                avatar
            }
        }
    })
];