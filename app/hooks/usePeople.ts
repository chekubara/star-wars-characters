import { PaginationResponse } from "@/types/PaginationResponse"
import { QueryClient, useQuery } from "@tanstack/react-query"

const API_URL = 'https://swapi.dev/api'

const fetchPeople = async (page: number = 1): Promise<PaginationResponse<Person>> => {
    const res = await fetch(`${API_URL}/people/?page=${page}`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const prefetchPeople = async (page: number = 1): Promise<QueryClient> => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['people', page], 
        queryFn:  () => fetchPeople(page),
    })
    return queryClient
}

const usePeople = (page: number = 1) => {
    return useQuery({
        queryKey: ['people', page],
        queryFn: () => fetchPeople(page),
    })
}

export { usePeople, fetchPeople, prefetchPeople }