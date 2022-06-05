interface Pagination {
    last_visible_page: number,
    has_next_page: boolean,
    current_page: number,
    items: {
        count: number,
        total: number,
        per_page: number
    }
}

interface Genres {
    mal_id: number,
    name: string,
    url: string,
    type?: string,
    count?: number
}

interface AnimeData {
    mal_id: number,
    title: string,
    episodes: number,
    source: string,
    status: string,
    url: string,
    images: {
        jpg: {
            large_image_url: string,
        }
    },
    rank?: number,
    synopsis: string,
    year: number,
    genres: Genres[],
    favorites: number,
    score: number,
}

export interface AnimeTops {
    pagination: Pagination,
    data: AnimeData[]
}

export interface AnimeGenres {
    pagination: Pagination,
    data: Genres,
}
