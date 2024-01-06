import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ImageState {   
    images: string[]
    
}

const initialState: ImageState = {
    images: ['']
}

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImages: (state, action: PayloadAction<string[]>) => {
            state.images = action.payload
        }
    }
});

export const { setImages } = imagesSlice.actions;
export default imagesSlice.reducer;