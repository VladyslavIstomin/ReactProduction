import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserState } from 'entities/User';

export const AppRouter = memo(() => {
    const { authUser } = useSelector(getUserState);

    const filterRoutes = useMemo(() => routes.filter(route => {
        if (route.authOnly && !authUser) {
            return false;
        }
        return true;
    }), [authUser]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {filterRoutes.map(({ path, element }) => {
                    return (
                        <Route
                            path={path}
                            key={path}
                            element={(
                                <div className='page-wrapper'>{element}</div>
                            )}/>
                    );
                })}
            </Routes>
        </Suspense>
    );
});