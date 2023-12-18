import { QueryClient, useQuery } from "@tanstack/react-query"
import { Character } from "@/types/Character"
import { API_URL } from "./const"

const getQueryKey = (id: number) =>  ['character', {id}]

const fetchCharacter = async (id: number): Promise<Character> => {
    const res = await fetch(`${API_URL}/people/${id}/`)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const prefetchCharacter = async (queryClient: QueryClient, id: number): Promise<Character | undefined> => {
    await queryClient.prefetchQuery({
        queryKey: getQueryKey(id), 
        queryFn:  () => fetchCharacter(id),
    })
    
    return queryClient.getQueryData<Character>(getQueryKey(id))
}

const useCharacter = (id: number) => {
    return useQuery({
        queryKey: getQueryKey(id),
        queryFn: () => fetchCharacter(id)
    })
}

export { useCharacter, fetchCharacter, prefetchCharacter }