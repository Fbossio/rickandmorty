import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Episode } from '../inerfaces/episodes';

interface EpisodeInterface {
    episode: Episode
}

const initialState: EpisodeInterface = {
    episode: {
        id: 0,
        name: '',
        air_date: '',
        episode: '',
        characters: [''],
        url: '',
        created: ''
    }
}

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        setEpisode: (state, action: PayloadAction<Episode>) => {
            state.episode = action.payload
        }
    }
})

export const { setEpisode } = episodesSlice.actions;
export default episodesSlice.reducer;