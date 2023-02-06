import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {Suspense} from "react";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <div className={classNames('btn', {hovered: true, selectable: false}, ['cls1', 'cls2'])}>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
            <Link to={'/'}>Main page link</Link>
            <Link to={'/about'}>About page link</Link>
            <Suspense fallback={<div>Loading ....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}