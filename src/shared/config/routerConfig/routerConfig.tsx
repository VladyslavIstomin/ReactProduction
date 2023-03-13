import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not-found',
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const RoutePaths: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
    [AppRouts.PROFILE]: '/profile',
    [AppRouts.NOT_FOUND]: '*'
};

export const routes: AppRouteProps[] = [
    {
        path: RoutePaths.main,
        element: <MainPage />
    },
    {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />
    }
];
