export default function TaskReducer(state, action
) {
    switch (action.type) {

        case "addTask": {
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: crypto.randomUUID(),
                        title: action.title,
                        description: action.description,
                        tags: action.tags,
                        priority: action.priority,
                        isFav: false
                    }
                ]
            }
        }
        case "changed": {
            return {
                ...state,
                data: state.data.map(task => {
                    if (task.id === action.task.id) {
                        return action.task;
                    } else {
                        return task;
                    }
                })
            };
        }
        case "search": {
            return {
                ...state,
                searchValue: action.searchValue,
                searchedData: state.data.filter(task =>
                    task.title.toLowerCase().includes(action.searchValue.toLowerCase())
                ),
            };

        }
        case "deleteTask": {
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.deleteTaskId)
            };
        }
        case "deleteAllTask": {
            return {
                ...state,
                data: []
            };
        }
        default:
            break;
    }
}