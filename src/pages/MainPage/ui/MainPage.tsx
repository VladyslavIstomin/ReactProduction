import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('Main page')}</h1>
        </div>
    );
});

export default MainPage;