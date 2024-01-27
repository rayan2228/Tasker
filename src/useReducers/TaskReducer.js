export default function TaskReducer(state, action
) {
    switch (action.type) {

        case "addTask": {
            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    title: action.title,
                    description: action.description,
                    tags: action.tags,
                    priority: action.priority,
                    isFav: false
                }
            ];
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