import axios from "axios";
import { BASE_URL } from "./config";
import { tokenStorage } from "@/store/storage";
import { logout } from "./authService";

export const refresh_tokens = async () => {
    try {
        const refreshToken = tokenStorage.getString('refresh_token')
        const response = await appAxios.post(`${BASE_URL}/auth/refresh-token`, { refresh_token: refreshToken })
        const new_access_token = response.data.access_token;
        const new_refresh_token = response.data.refresh_token;
        tokenStorage.set('access_token', new_access_token)
        tokenStorage.set('refresh_token', new_refresh_token)
        return new_access_token
    } catch (error) {
        console.log('Refresh Token Error', error)
        tokenStorage.clearAll()
        logout();
    }
}

export const appAxios = axios.create({
    baseURL: BASE_URL,
});

appAxios.interceptors.request.use(
    async (config) => {
        const accessToken = tokenStorage.getString('access_token')
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

appAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            try {
                const newAccessToken = await refresh_tokens()
                if (newAccessToken) {
                    tokenStorage.set('access_token', newAccessToken)
                    error.config.headers.Authorization = `Bearer ${newAccessToken}`
                    return appAxios(error.config)
                }

            } catch (error) {
                console.log('error', error)
            }
        }
        return Promise.reject(error)
    }
)