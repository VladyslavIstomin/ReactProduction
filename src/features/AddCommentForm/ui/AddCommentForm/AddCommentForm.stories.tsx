import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { AddCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { action } from '@storybook/addon-actions';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('send comment')
};
Normal.decorators = [StoreDecorator(
    { addCommentForm: {} },
    { addCommentForm: AddCommentFormReducer }
)];
