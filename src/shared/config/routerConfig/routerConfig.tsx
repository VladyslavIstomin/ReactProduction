import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE= 'article_create',
    ARTICLE_EDIT = 'article_edit',
    NOT_FOUND = 'not_found',
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export const RoutePaths: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about',
    [AppRouts.PROFILE]: '/profile/',
    [AppRouts.ARTICLES]: '/articles',
    [AppRouts.ARTICLE_DETAILS]: '/articles/',
    [AppRouts.ARTICLE_CREATE]: '/articles/create',
    [AppRouts.ARTICLE_EDIT]: '/articles/:id/edit',
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
        path: `${RoutePaths.profile}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: RoutePaths.articles,
        element: <ArticlesPage />,
        authOnly: true
    },
    {
        path: RoutePaths.article_create,
        element: <ArticleEditPage />,
        authOnly: true
    },
    {
        path: RoutePaths.article_edit,
        element: <ArticleEditPage />,
        authOnly: true
    },
    {
        path: `${RoutePaths.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true
    },
    {
        path: RoutePaths.not_found,
        element: <NotFoundPage />
    }
];
