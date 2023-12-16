import { QueryClient, useQuery } from "@tanstack/react-query"
import { Species } from "@/types/Species"
import { API_URL } from "./const"

const getQueryKey = (id: number) =>  ['species', {id}]

const fetchSpecies = async (id: number): Promise<Species> => {
    const res = await fetch(`${API_URL}/species/${id}/`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const prefetchSpecies = async (queryClient: QueryClient, id: number): Promise<Species | undefined> => {
    await queryClient.prefetchQuery({
        queryKey: getQueryKey(id), 
        queryFn:  () => fetchSpecies(id),
    })

    return queryClient.getQueryData<Species>(getQueryKey(id))
}

const useSpecies = (id: number) => {
    return useQuery({
        queryKey: getQueryKey(id),
        queryFn: () => fetchSpecies(id)
    })
}

export { useSpecies, fetchSpecies, prefetchSpecies }