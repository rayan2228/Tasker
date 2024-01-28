import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch, useTasks } from "../../contexts/TasksContext";
import { Bounce, toast } from "react-toastify";

const Modal = ({ onClose, editTask }) => {
  const tasks = useTasks();
  const dispatch = useDispatch();
  const [addTaskValues, setAddTaskValues] = useState(
    editTask || {
      title: "",
      description: "",
      tags: [],
      priority: "",
    }
  );
  const handleAddTaskValues = (e) => {
    const { name, value } = e.target;
    if (name === "tags") {
      let allTags = value.split(",");
      setAddTaskValues((prevValues) => ({ ...prevValues, tags: allTags }));
    } else {
      setAddTaskValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    if (
      addTaskValues.title === "" ||
      addTaskValues.description === "" ||
      addTaskValues.tags.length === 0 ||
      addTaskValues.priority === ""
    ) {
      toast.error("all fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      dispatch({
        type: "addTask",
        title: addTaskValues.title,
        description: addTaskValues.description,
        tags: addTaskValues.tags,
        priority: addTaskValues.priority,
      });
      setAddTaskValues({
        title: "",
        description: "",
        tags: [],
        priority: "",
      });
      toast.success("Task added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  const handleUpdateTask = (e) => {
    e.preventDefault();
    console.log(addTaskValues.tags.length);
    if (
      addTaskValues.title === "" ||
      addTaskValues.description === "" ||
      addTaskValues.tags.length === 0 ||
      addTaskValues.priority === ""
    ) {
      toast.error("all fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      dispatch({
        type: "changed",
        task: {
          ...editTask,
          title: addTaskValues.title,
          description: addTaskValues.description,
          tags: addTaskValues.tags,
          priority: addTaskValues.priority,
        },
      });
      setAddTaskValues({
        title: "",
        description: "",
        tags: [],
        priority: "",
      });
      onClose();
      toast.success("Task updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="fixed top-0 left-0 z-[60] w-screen h-screen bg-[#191d266f]">
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>
        {/* inputs */}
        <div className="text-white space-y-9 lg:space-y-10">
          {/* title */}
          <div className="space-y-2 lg:space-y-3">
            <Input
              label={"Title"}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required=""
              onChange={handleAddTaskValues}
              value={addTaskValues.title}
              name={"title"}
            />
          </div>
          {/* description */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required=""
              onChange={handleAddTaskValues}
              value={addTaskValues.description}
              name={"description"}
            />
          </div>
          {/* input group */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* tags */}
            <div className="space-y-2 lg:space-y-3">
              <Input
                label={"Tags"}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required=""
                onChange={handleAddTaskValues}
                value={[...addTaskValues.tags]}
                name={"tags"}
              />
            </div>
            {/* priority */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required=""
                onChange={handleAddTaskValues}
                value={addTaskValues.priority}
                name={"priority"}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* inputs ends */}
        <div className="flex justify-center mt-16 lg:mt-20 gap-x-5">
          {editTask ? (
            <button
              type="submit"
              className="px-4 py-2 text-white transition-all bg-blue-600 rounded hover:opacity-80"
              onClick={handleUpdateTask}
            >
              Update Task
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 text-white transition-all bg-blue-600 rounded hover:opacity-80"
              onClick={handleAddTask}
            >
              Create new Task
            </button>
          )}

          <Button className={"bg-red-500"} onClick={onClose}>
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
