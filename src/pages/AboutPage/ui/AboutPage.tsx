import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <h1>{t('About page')}</h1>
        </Page>
    );
});

export default AboutPage;