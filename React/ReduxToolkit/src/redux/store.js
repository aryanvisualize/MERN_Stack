import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
})

//Steps:
// Create store
// Wrap app component under provider
// Create slice
// Resgiter reducer in store