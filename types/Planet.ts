export type Planet = {
    name: string
    diameter: string
    rotation_period: string
    orbital_period: string
    gravity : string
    population : string
    climate: string
    terrain: string
    surface_water: string
    residents: string[]
    films : string[]
    url: string
    created: string
    edited: string
}

export const getPlanetId = (url: string): number => {
    const id = url.split('/').filter(Boolean).pop()
    if (!id) throw new Error('Invalid planet url')
    return parseInt(id)
}