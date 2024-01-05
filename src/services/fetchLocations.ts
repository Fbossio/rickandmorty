import axios from "axios";
import { Location, Locations } from "../inerfaces/locations";

const BASE_URL = 'https://rickandmortyapi.com/api/location';

export const fetchLocations = async (page: string): Promise<Locations> => {
    const result = await axios.get(`${BASE_URL}?page=${page}`)
    return result.data
}

export const fetchLocation = async (id: string): Promise<Location> => {
    const location = await axios.get(`${BASE_URL}/${id}`)
    return location.data
}