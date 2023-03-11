import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template:
    ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...Object.assign({}, args)} />;

export const Card = Template.bind({});
Card.args = {
    data: {
        first: 'sef',
        lastname: 'sds',
        age: 23,
        currency: Currency.RUB,
        country: Country.UKRAINE,
        city: 'Lviv',
        username: 'wef',
        avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
    }
};

export const Error = Template.bind({});
Error.args = {
    error: 'srfe'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
