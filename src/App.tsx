import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {Suspense, useContext, useState} from "react";
import {LOCALE_STORAGE_THEME_KEY, Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
            <Link to={'/'}>Main page link</Link>
            <Link to={'/about'}>About page link</Link>
            <Suspense fallback={<div>Loading ....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                    <Route path={'/'} element={<MainPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    )
}