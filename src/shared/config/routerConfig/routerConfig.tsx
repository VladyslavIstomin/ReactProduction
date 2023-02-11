import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const RoutePaths: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
    [AppRouts.NOT_FOUND]: '*'
};

export const routes: RouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage />
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />
    }
];
