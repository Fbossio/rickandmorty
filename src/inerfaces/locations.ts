export interface Locations {
    info: Info,
    results: Location[]
}

export interface Info {
    count: number,
    pages: number,
    next: string | null,
    previous: string | null
}

export interface Location {
    id: number,
    name: string,
    dimensions: string,
    residents: string[],
    url: string,
    created: string
}