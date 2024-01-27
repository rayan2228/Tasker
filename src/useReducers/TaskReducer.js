export default function TaskReducer(state, action
) {
    switch (action.type) {
        case "deleteTask": {
            return state.filter(task => task.id !== action.deleteTaskId);
        }
        case "deleteAllTask": {
            return state = [];
        }
        case "isFav": {
            return state.map(task => {
                if (task.id === action.task.id) {
                    return action.task;
                } else {
                    return task;
                }
            });
        }
        default:
            break;
    }
}