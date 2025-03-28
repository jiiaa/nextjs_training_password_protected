import { ReactNode } from 'react';

export interface Content {
    title: string;
    image?: string;
    instructions?: string;
    subContent?: Content[];
}

export interface ContentAlps {
    alps: Content[];
}

export interface ContentIsland {
    island: Content[];
}

export interface ContentSand {
    sand: Content[];
}
