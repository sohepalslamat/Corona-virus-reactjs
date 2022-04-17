import axios from "axios"

const api = axios.create({
    baseURL: "https://coronavirus-monitor.p.rapidapi.com/coronavirus/",
    headers: {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02",
    },
})

export default api
