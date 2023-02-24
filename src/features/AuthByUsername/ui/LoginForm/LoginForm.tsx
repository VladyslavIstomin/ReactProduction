import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div>
                <Input
                    type="text"
                    className={cls.input}
                    label={t('Username')}
                />
            </div>
            <div>
                <Input
                    type="text"
                    className={cls.input}
                    label={t('Password')}
                />
            </div>
            <div className={cls.loginBtn}>
                <Button>
                    {t('Sign in')}
                </Button>
            </div>
        </div>
    );
};