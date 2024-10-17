import { createSlice } from '@reduxjs/toolkit'


// it returns automatically  actions 
export const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        value: 0
    },
    // actions 
    reducers: {
        //arrow function
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        changeRange:(state,action)=>{
            state.value+=action.payload
        }

    }

})
// actions are needed for component 
export const { increment, decrement, reset,changeRange } = counterSlice.actions
//reducer are used to store updates
export default counterSlice.reducer