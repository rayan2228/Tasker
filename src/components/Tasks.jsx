import React from "react";
import { useDispatch, useTasks } from "../contexts/TasksContext";
const Tasks = ({ onEdit, onDelete }) => {
  const allTasks = useTasks();
  const dispatch = useDispatch();

  return (
    <>
      <div className="overflow-auto">
        <table className="overflow-auto table-fixed xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                Title
              </th>
              <th className="w-full p-4 pb-8 text-sm font-semibold capitalize">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                Tags
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Priority
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {allTasks?.map((task) => (
              <tr
                key={task.id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              >
                <td>
                  <span
                    onClick={() =>
                      dispatch({
                        type: "isFav",
                        task: {
                          ...task,
                          isFav: task.isFav ? false : true,
                        },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-star"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke={task.isFav ? "yellow" : "white"}
                      fill={task.isFav ? "yellow" : "black"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </span>
                </td>
                <td>{task.title}</td>
                <td>
                  <div>{task.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags?.map((tag, index) => (
                      <li key={index}>
                        <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-center">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      className="text-red-500"
                      onClick={() => onDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-blue-500"
                      onClick={() => onEdit(task.id)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tasks;
