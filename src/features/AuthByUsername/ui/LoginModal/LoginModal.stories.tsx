import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const LoginElement = Template.bind({});
LoginElement.args = {
    isOpen: true
};
LoginElement.decorators = [StoreDecorator({
    login: { username: 'efwef', password: '123' }
})];

export const LoginElementDark = Template.bind({});
LoginElementDark.args = {
    isOpen: true
};
LoginElementDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    login: { username: 'efwef', password: '123' }
})];
