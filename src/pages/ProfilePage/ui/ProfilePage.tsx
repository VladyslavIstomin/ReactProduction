import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const dynamicReducers: ReducersList = {
    profile: profileReducer
};

const ProfilePage = memo(() => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={dynamicReducers} removeAfterUnmount>
            <div>
                <h1>{t('Profile page')}</h1>
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;