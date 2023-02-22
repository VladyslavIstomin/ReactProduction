import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    test('render component', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('increment', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('decrement', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});