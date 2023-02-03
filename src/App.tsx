import {Link, Route, Routes } from "react-router-dom";
import './style.scss';
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import { Suspense } from "react";

export const App = () => {
    return (
        <div className="app">
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