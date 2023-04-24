import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: `${import.meta.env.VITE_APP_SECRET_VAR}`,
    },
});

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
