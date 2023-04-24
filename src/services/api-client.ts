import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "395c7d327fd144cd828a168b6c866009",
    },
});
