import { authApi } from './axios'

const saveconnect = (data: {}) => {
    return authApi({
        url: "/dbconnect/saveconnect",
        data: data
    })
}