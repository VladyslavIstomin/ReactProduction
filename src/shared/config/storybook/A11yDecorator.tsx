import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18n from 'shared/config/i18n/i18n';

export const A11yDecorator = (StoryComponent: Story) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback=''>
                <StoryComponent />
            </Suspense>
        </I18nextProvider>
    );
};