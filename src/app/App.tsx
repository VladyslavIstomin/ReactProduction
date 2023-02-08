import './styles/index.scss';
import {Suspense} from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Suspense fallback={<div>Loading ....</div>}>
                <AppRouter />
            </Suspense>
        </div>
    )
}