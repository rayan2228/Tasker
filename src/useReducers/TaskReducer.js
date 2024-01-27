export default function TaskReducer(state, action
) {
    switch (action.type) {
        case "deleteTask": {
            return state.filter(task => task.id !== action.deleteTaskId);
        }
        case "deleteAllTask": {
            return state = [];
        }
        default:
            break;
    }
}