// PYAK7m8d0VD6jKtrhzXRFQGc2K9LvLDHU6HuOrXPeng

import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';

export const getPost = async options => {
    const { data } = await axios.get('/comments', {
        params: {
            limit: 6,
            ...options,
        },
    });
    return data;
}; 