import {Suspense} from "react";
import {Route, RouterProps, Routes} from "react-router-dom";
import {routes} from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading ....</div>}>
            <Routes>
                {routes.map(({path, element}) => {
                    return (
                        <Route
                            path={path}
                            key={path}
                            element={(
                                <div className='page-wrapper'>{element}</div>
                            )}/>
                    )
                })}
            </Routes>
        </Suspense>
    );
};