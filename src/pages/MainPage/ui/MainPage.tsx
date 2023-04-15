import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { SelectBox } from 'shared/ui/SelectBox/SelectBox';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <h1>{t('Main page')}</h1>
            <SelectBox
                onChange={(value) => {console.log();}}
                value={undefined}
                defaultValue={'Select value'}
                items={[
                    { value: '1', content: '1232131' },
                    { value: '2', content: '1232131', disabled: true },
                    { value: '3', content: '1232131' },
                ]}
            />
        </Page>
    );
});

export default MainPage;