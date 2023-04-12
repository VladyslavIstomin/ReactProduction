import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
        </>
    )
};

export const Row16 = Template.bind({});
Row16.args = {
    gap: 16,
    children: (
        <>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
        </>
    )
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
        </>
    )
};

export const Column16 = Template.bind({});
Column16.args = {
    gap: 16,
    direction: 'column',
    children: (
        <>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
        </>
    )
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    gap: 16,
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
            <div>Element</div>
        </>
    )
};