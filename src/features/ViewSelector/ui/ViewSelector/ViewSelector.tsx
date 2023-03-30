import cls from './ViewSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ViewSelectorProps {
    className?: string;
    view?: string;
    onViewClick: (value: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    }, {
        view: ArticleView.BIG,
        icon: ListIcon,
    }
];

export const ViewSelector = memo(({ className, view, onViewClick }: ViewSelectorProps) => {
    const { t } = useTranslation();

    const onClickHandler = (btnView: ArticleView) => () => {
        onViewClick(btnView);
    };

    return (
        <div className={classNames(cls.ViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickHandler(viewType.view)}
                    key={viewType.icon}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: viewType.view === view }, [cls.icon])}
                    />
                </Button>
            ))}
        </div>
    );
});