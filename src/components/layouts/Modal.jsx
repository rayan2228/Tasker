import React from "react";
import Button from "./Button";
import Input from "./Input";

const Modal = ({ onClose }) => {
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
              defaultValue={""}
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
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* inputs ends */}
        <div className="flex justify-center mt-16 lg:mt-20 gap-x-5">
          <button
            type="submit"
            className="px-4 py-2 text-white transition-all bg-blue-600 rounded hover:opacity-80"
          >
            Create new Task
          </button>
          <Button className={"bg-red-500"} onClick={onClose}>
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
