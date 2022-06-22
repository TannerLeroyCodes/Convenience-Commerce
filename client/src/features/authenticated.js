import {createSlice} from '@reduxjs/toolkit';

export const authenticatedSlice = createSlice({
    name: 'authenticated',
    initialState: {value: {isAuthenticated: false}},
    reducers: {
        authenticate: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {authenticate} =  authenticatedSlice.actions;

export default authenticatedSlice.reducer;