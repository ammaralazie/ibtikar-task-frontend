import _axios from "@/plugins/axios"
import environment from "./environment"
import hundlerErorr from '@/helper/hundlerErorr';

const urlApi = environment.port ? `${environment.url}:${environment.port}/${environment.prefix}` : `${environment.url}/${environment.prefix}`
export const postRequest = async (url: string, data: any): Promise<object | null> => {
    try {
        const result = await _axios.post(`${urlApi}/${url}`, data)
        return result.data
    } catch (e) {
        const write = await hundlerErorr(e);
        if (write)
            return {};
        return {}
    }
}// /postRequest

export const getRequest = async (url: string, params?: any): Promise<object | null> => {
    try {
        const result = await _axios.get(`${urlApi}/${environment.prefix}/${url}`, { params: params })
        return result.data
    } catch (e) {
        const write = await hundlerErorr(e);
        if (write)
            return {};
        return {}
    }
}// /getRequest