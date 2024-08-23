export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type UseFetchType<T> = {
    data: T | null,
    error: string | null,
    loading: boolean
}

export type ApiResponseType = {
    isSuccess: boolean
}