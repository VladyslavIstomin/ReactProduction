import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from 'entities/User';
import { RoutePaths } from 'shared/config/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePaths.main,
                text: 'Main page link',
                Icon: HomeIcon
            },
            {
                path: RoutePaths.about,
                text: 'About page link',
                Icon: AboutIcon
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePaths.profile + userData.id,
                    text: 'Profile page link',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: RoutePaths.articles,
                    text: 'Articles page link',
                    Icon: ArticlesIcon,
                    authOnly: true
                }
            );
        }

        return sidebarItemsList;
    }
);