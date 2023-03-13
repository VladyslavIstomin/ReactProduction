import { memo, Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routes } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/Router/ui/RequireAuth';

export const AppRouter = memo(() => {
    const routeWithAuth = useCallback((route: AppRouteProps) => {
        const element = (
            <div className='page-wrapper'>{route.element}</div>
        );
        return (
            <Route
                path={route.path}
                key={route.path}
                element={(
                    route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
                )}
            />
        );
    }, []);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                { routes.map(routeWithAuth) }
            </Routes>
        </Suspense>
    );
});