import React from 'react';
import { RoutePaths } from 'shared/config/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePaths.profile,
        text: 'Profile page link',
        Icon: ProfileIcon,
        authOnly: true
    }
];