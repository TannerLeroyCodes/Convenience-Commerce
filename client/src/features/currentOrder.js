import {createSlice} from '@reduxjs/toolkit';

export const currentOrderSlice = createSlice({
    name: '',
    initialState: {value: {id: "", user_id:"", ordered: false }},
    reducers: {
        makeCurrentOrder: (state, action) => {
            state.value = action.payload
        },

        leaveCurrentOrder: (state, action) =>{
         state.value = {id: ""} }
    }
    },
);

export const {makeCurrentOrder} = currentOrderSlice.actions;

export default currentOrderSlice.reducer;