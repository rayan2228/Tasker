import React from "react";
import Button from "./layouts/Button";
import Input from "./layouts/Input";
import { useDispatch } from "../contexts/TasksContext";
import { initialData } from "../utils/data/initialData";
const TasksListHeader = ({ onOpenModal, onOpenConfirmModal }) => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: "search",
      searchValue: e.target.value,
    });
  };
  return (
    <div className="items-center justify-between mb-14 sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <Input
                type="search"
                id="search-dropdown"
                className="z-20 block w-full px-4 py-2 pr-10 bg-gray-800 focus:outline-none"
                placeholder="Search Task"
                required=""
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="absolute top-0 h-full text-white right-2 rounded-e-lg md:right-4"
                onClick={handleSearch}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <Button className={"bg-blue-500"} onClick={onOpenModal}>
          Add Task
        </Button>
        <Button className={"bg-red-500"} onClick={onOpenConfirmModal}>
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default TasksListHeader;
