import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "./slices/tasksSlice"


export const store = configureStore({   //configure store & setting reducer inside with a key name(tasks)
    reducer: {
        tasksReducer:tasksSlice
    }
})