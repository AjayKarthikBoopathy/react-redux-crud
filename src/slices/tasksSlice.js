import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{}
}

//CRUD
//Delete - filter other data except the Id
//Update - map with Id matching & useEffect for dependency
//setSelectedTask - to show what data to be updated/edited
//reducerFunction(state, action) - action contains payload object

const tasksSlice = createSlice({    //create slice with name, initialState & reducer
    name:'tasks',//dummy name       //export default name.reducer & name.actions with destructured implementations
    initialState,
    reducers: {
        addTaskToList:(state,action) => {
            const id = Math.random() * 100      //for generating different unique Ids
            let task = {...action.payload,id}
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskInList:(state,action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
        },
        setSelectedTask:(state,action) => {
            state.selectedTask = action.payload
        }

    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer