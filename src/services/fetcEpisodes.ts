import axios from 'axios';
import { Episode } from '../inerfaces/episodes';

const BASE_URL = 'https://rickandmortyapi.com/api/episode'

export const fetchEpisode = async (id: string): Promise<Episode> => {
    const result = await axios.get(`${BASE_URL}/${id}`)
    return result.data
}