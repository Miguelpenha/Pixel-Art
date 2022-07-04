import useSWR from 'swr'
import axios, { AxiosRequestConfig } from 'axios'

export default function api<Idata>(url: string, config?: object) {
    const { data, error, mutate } = useSWR<Idata>(url, async url => {
        const response = await axios(url, config)
        const data = await response.data

        return data
    })

    return { data, error, mutate }
}

export function get<Idata>(url: string, config?: object) {
    const { data, error, mutate } = useSWR<Idata>(url, async url => {
        const response = await axios.get(url, config)
        const data = await response.data
        
        return data
    })
    
    return { data, error, mutate }
}

export function post<Idata, Iparams>(url: string, dataParams?: Iparams | object, config?: AxiosRequestConfig<any> | undefined) {
    const { data, error, mutate } = useSWR<Idata>(url, async url => {
        const response = await axios.post(url, dataParams, config)
        const data = await response.data

        return data
    })
    
    return { data, error, mutate }
}