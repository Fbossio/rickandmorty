export interface Episodes {
    info: Info,
    results: Episode[]
}

export interface Info {
    count: number,
    page: number,
    next: string | null,
    prev: string | null
}


export interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}