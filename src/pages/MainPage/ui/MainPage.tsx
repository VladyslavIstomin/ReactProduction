import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const MainPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        throw new Error('f');
    }, []);

    return (
        <div>
            <h1>{t('Main page')}</h1>
        </div>
    );
};

export default MainPage;