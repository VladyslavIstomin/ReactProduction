import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <StoryComponent />
        </ThemeProvider>
    );
};