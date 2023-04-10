import { screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from 'shared/lib/tests/ComponentRender';

describe('Sidebar', () => {
    test('with only first param', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle', () => {
        ComponentRender(<Sidebar />);
        const btn = screen.getByTestId('sidebar-btn');
        userEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        userEvent.click(btn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});