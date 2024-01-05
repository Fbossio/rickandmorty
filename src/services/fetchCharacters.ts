import axios from "axios";
import { Character, Characters } from "../inerfaces/characters";

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page: string): Promise<Characters> => {
    const result = await axios.get(`${BASE_URL}/?page=${page}`)
    return result.data
}

export const fetchCharacter = async (id: string): Promise<Character> => {
    const character = await axios.get(`${BASE_URL}/${id}`)
    return character.data
}

export const filterCharacterByStatus = async (status: string): Promise<Characters> => {
    const result = await axios.get(`${BASE_URL}/?status=${status}`)
    return result.data
}

export const filterCharacterByGender = async (gender: string): Promise<Characters> => {
    const result = await axios.get(`${BASE_URL}/?gender=${gender}`)
    return result.data
}