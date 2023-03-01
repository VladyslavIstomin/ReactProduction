import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { loginReducer } from 'features/AuthByUsername';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginElement = Template.bind({});
LoginElement.args = {};
LoginElement.decorators = [StoreDecorator(
    { login: { username: 'efwef', password: '123' } },
    { login: loginReducer }
)];

export const LoginError = Template.bind({});
LoginError.args = {};
LoginError.decorators = [StoreDecorator(
    { login: { username: 'efwef', password: '123', error: 'Error error' } },
    { login: loginReducer }
)];

export const LoginLoading = Template.bind({});
LoginLoading.args = {};
LoginLoading.decorators = [StoreDecorator(
    { login: { username: 'efwef', password: '123', isLoading: true } },
    { login: loginReducer }
)];
