import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './characterImagesSlice';
import charactersReducer from './characterSlice';
import episodesReducer from './episodeSlice';

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        episodes: episodesReducer,        
        images: imagesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;