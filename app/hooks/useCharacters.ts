import { QueryClient, useQuery } from "@tanstack/react-query"
import { API_URL } from "./const"
import { PaginationResponse } from "@/types/PaginationResponse"
import { Character } from "@/types/Character"

const getQueryKey = (page: number) =>  ['characters', {page}]

const fetchCharacters = async (page: number = 1): Promise<PaginationResponse<Character>> => {
    const res = await fetch(`${API_URL}/people/?page=${page}`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const prefetchCharacters = async (page: number = 1): Promise<QueryClient> => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: getQueryKey(page), 
        queryFn:  () => fetchCharacters(page),
    })
    return queryClient
}

const useCharacters = (page: number = 1) => {
    return useQuery({
        queryKey: getQueryKey(page),
        queryFn: () => fetchCharacters(page),
    })
}

export { useCharacters, prefetchCharacters }