import { useQuery } from "@tanstack/react-query"

const API_URL = 'https://swapi.dev/api'

const fetchPerson = async (url: string): Promise<Person> => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    return res.json()
}

const usePerson = (url: string) => {
    return useQuery({
        queryKey: [url],
        queryFn: () => fetchPerson(url)
    })
}

export { usePerson, fetchPerson }