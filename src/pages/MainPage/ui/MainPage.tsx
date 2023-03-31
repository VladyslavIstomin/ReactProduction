import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <h1>{t('Main page')}</h1>
        </Page>
    );
});

export default MainPage;