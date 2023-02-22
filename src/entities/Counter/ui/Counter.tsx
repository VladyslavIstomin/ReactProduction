import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t, i18n } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('Increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('Decrement')}</Button>
        </div>
    );
};