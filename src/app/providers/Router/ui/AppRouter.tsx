import {Route, RouterProps, Routes} from "react-router-dom";
import {routes} from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, element}) => {
                return (
                    <Route path={path} element={element}/>
                )
            })}
        </Routes>
    );
};