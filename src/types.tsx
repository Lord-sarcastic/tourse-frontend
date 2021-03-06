import { ComponentType } from "react";

export type Page = {
    Component: ComponentType<any>;
    route: string;
};

export type PhotoType = {
    id: number;
    image: string;
    title: string;
};

export type GalleryType = {
    id: number;
    title: string;
    slug: string;
    description: string;
    photos: PhotoType[];
};

export type CountryType = {
    id: number;
    name: string;
    description: string;
    slug: string;
    cover: PhotoType;
    gallery: GalleryType;
};

export type CultureType = {
    id: number;
    name: string;
    description: string;
    slug: string;
    gallery: GalleryType;
    zone: number;
};

export type DestinationType = CultureType;

export type LoginError = {
    detail: string;
};

export type LoginProps = {
    email: string;
    password: string;
};

export type LocalStorageUserType = {
    access: string;
    refresh: string;
};
