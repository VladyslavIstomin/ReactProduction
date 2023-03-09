declare module '*.module.css';
declare module '*.module.scss';
declare module '*.svg' ;
declare module '*.png' ;
declare module '*.jpg' ;
declare module '*.jpeg' ;

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;