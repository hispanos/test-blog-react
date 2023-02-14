import axios from "axios";
import endpoints from "./endpoints";

export const getNews = async () => {
    try {
        const { data } = await axios.get(endpoints.news)
        return data
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getNew = async (id) => {
    try {
        const { data } = await axios.get(`${endpoints.news}/${id}`)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}