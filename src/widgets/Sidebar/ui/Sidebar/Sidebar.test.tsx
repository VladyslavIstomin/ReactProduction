import { screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { RenderWithTranslation } from 'shared/lib/tests/RenderWithTranslation';
import { userEvent } from '@storybook/testing-library';

describe('Sidebar', () => {
    test('with only first param', () => {
        RenderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle', () => {
        RenderWithTranslation(<Sidebar />);
        const btn = screen.getByTestId('sidebar-btn');
        userEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        userEvent.click(btn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});