import cls from './ErrorWidget.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ErrorWidgetProps {
    className?: string
}

export const ErrorWidget = ({ className }: ErrorWidgetProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ErrorWidget, {}, [className])}>
            <p>{t('Something went wrong')}</p>
        </div>
    );
};