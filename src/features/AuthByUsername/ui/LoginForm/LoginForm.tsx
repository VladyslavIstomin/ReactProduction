import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../model/selector/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { loginByUserName } from '../../model/services/loginByUsername/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const { username, password, error, isLoading } = useSelector(getLoginState);
    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickHandler = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Enter username and password')} />
            <div>
                <Input
                    type="text"
                    className={cls.input}
                    label={t('Username')}
                    value={username}
                    onChangeCallback={onChangeUsername}
                />
            </div>
            <div>
                <Input
                    type="text"
                    className={cls.input}
                    label={t('Password')}
                    value={password}
                    onChangeCallback={onChangePassword}
                />
            </div>
            {error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}
            <div className={cls.loginBtn}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onClickHandler}
                    disabled={isLoading}
                >
                    {t('Sign in')}
                </Button>
            </div>
        </div>
    );
});