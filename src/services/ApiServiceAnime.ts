import { AnimeGenres, AnimeTops } from "../models/anime";
import makeRequest from "./MakeRequest";

const path = 'https://api.jikan.moe/v4/';

const ApiServiceAnime = {

    getGeneros(): Promise<AnimeGenres> {
        const method = 'GET';
        const url = path + 'genres/anime';
        return makeRequest({ url, method });
    },

    getAnimeTops(): Promise<AnimeTops> {
        const method = 'GET';
        const url = path + 'top/anime';
        return makeRequest({ method, url });
    }

}

export default ApiServiceAnime;