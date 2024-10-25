const initialStates = {
    taskData: []
}

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_TASK":
            return {
                taskData: [...state.taskData, action.payload]
            }
        case "UPDATE_TASK":
            return {
                ...state,
                taskData: state.taskData.map(x => x.id === action.payload.id ? action.payload : x)
            }

        case "REMOVE_FROM_TASK":
            return {
                // setValue((prev) => prev.filter((value) => value.id !== id));
                ...state,
                taskData: state.taskData.filter((value) => value.id !== action.payload)
            }

        default:
            return state;
    }
}

export {
    initialStates,
    taskReducer
}