import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback, useEffect } from 'react';
import { loginByUserName } from '../../model/services/loginByUsername/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selector/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selector/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const dynamicReducers: ReducersList = {
    login: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickHandler = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={dynamicReducers} removeAfterUnmount={true}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;