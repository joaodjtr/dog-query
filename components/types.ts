export type Endpoint = 'random' | 'by-breed'
export interface ResultData{
    message: string
    status: StatusFetch
}

export type StatusFetch = 'success' | 'error'