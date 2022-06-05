import axios from "axios";

interface RequestPros {
    url: string;
    method: string;
    params?: string;
    query?: object
}

const makeRequest = async (response: RequestPros) => {
    const res = await axios({
        url: response.url,
        method: response.method,
        params: response.params,
    });

    return res.data;
}

export default makeRequest;