import {classNames} from "shared/lib";
import cls from './LangSwitcher.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={handleClick}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('Language')}
        </Button>
    );
};