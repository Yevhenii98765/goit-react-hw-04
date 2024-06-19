import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "PYAK7m8d0VD6jKtrhzXRFQGc2K9LvLDHU6HuOrXPeng";

export const getData = async (searchQuery, page) => {
  const data = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return data;
};