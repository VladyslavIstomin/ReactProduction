import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => {
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
};