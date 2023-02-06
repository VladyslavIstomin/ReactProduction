import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss';
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                    <Route path={'/'} element={<MainPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    )
}