import { QueryClient, useQuery } from "@tanstack/react-query"
import { Planet } from "@/types/Planet"
import { API_URL } from "./const"

const getQueryKey = (id: number) =>  ['planet', {id}]

const fetchPlanet = async (id: number): Promise<Planet> => {
    const res = await fetch(`${API_URL}/planets/${id}/`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const prefetchPlanet = async (queryClient: QueryClient, id: number): Promise<Planet | undefined> => {
    await queryClient.prefetchQuery({
        queryKey: getQueryKey(id), 
        queryFn:  () => fetchPlanet(id),
    })

    return queryClient.getQueryData<Planet>(getQueryKey(id))
}

const usePlanet = (id: number) => {
    return useQuery({
        queryKey: getQueryKey(id),
        queryFn: () => fetchPlanet(id)
    })
}

export { usePlanet, fetchPlanet, prefetchPlanet }