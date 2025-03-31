interface Content {
    title: string;
    instructions?: string;
    image?: string;
    subContent?: Content[];
}

interface ContentHeroUi {
    title: string;
    subtitle?: string;
    instructions?: string;
    image?: string;
    subContent?: ContentHeroUi[];
}

export interface ContentAlps {
    alps: Content[];
}

export interface ContentSand {
    sand: Content[];
}

export interface ContentIsland {
    island: ContentHeroUi[];
}
