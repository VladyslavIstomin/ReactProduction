import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
import { isLoading } from 'entities/Article/ui/ArticleDetails/ArticleDetails.stories';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Comment 1',
            user: { username: 'Ihor', id: '1' }
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { username: 'Kolia', id: '2' }
        }
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
Loading.story = {
    parameters: {
        loki: { skip: true },
    }
};