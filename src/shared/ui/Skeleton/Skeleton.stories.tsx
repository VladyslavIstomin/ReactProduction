import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    height: 100
};

export const NormalCircle = Template.bind({});
NormalCircle.args = {
    height: 50,
    width: 50,
    radius: '50%'
};

export const Dark = Template.bind({});
Dark.args = {
    height: 100
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    height: 50,
    width: 50,
    radius: '50%'
};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];

export const Purple = Template.bind({});
Purple.args = {
    height: 100
};
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];

export const PurpleCircle = Template.bind({});
PurpleCircle.args = {
    height: 50,
    width: 50,
    radius: '50%'
};
PurpleCircle.decorators = [ThemeDecorator(Theme.PURPLE)];