import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, Info } from '../inerfaces/characters';

interface CharactersState {
    characters: Character[];
    character: Character;
    info: Info;
    page: string;
    
}

const initialState: CharactersState = {
    characters: [],
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    },
    page: '1',
    character: {
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
            name: '',
            url: ''
        },
        location: {
            name: '',
            url: ''
        },
        image: '',
        episode: [''],
        url: '',
        created: ''
    }
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload
        },
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload
        },
        setInfo: (state, action: PayloadAction<Info>) => {
            state.info = action.payload
        },
        setCharacter: (state, action: PayloadAction<Character>) => {
            state.character = action.payload
        }
    }
})

export const { setCharacters, setPage, setInfo, setCharacter} = charactersSlice.actions;
export default charactersSlice.reducer;





