import React from "react";
import Button from "./Button";

const ConfirmModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-[60] w-screen h-screen bg-[#191d266f]">
      <div className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Are you sure you want to delete this task?
        </h2>
        <div className="flex justify-center mt-16 lg:mt-20 gap-x-5">
          <Button className={"bg-red-500"}>Delete</Button>
          <Button className={"bg-green-500"} onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
