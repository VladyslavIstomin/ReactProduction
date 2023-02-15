import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorWidget } from './ErrorWidget';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
    title: 'widgets/ErrorWidget',
    component: ErrorWidget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorWidget>;

const Template: ComponentStory<typeof ErrorWidget> = (args) => <ErrorWidget {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];