import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const AboutPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('About page')}</h1>
        </div>
    );
});

export default AboutPage;