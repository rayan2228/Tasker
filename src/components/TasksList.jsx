import React, { useState } from "react";
import Container from "./layouts/Container";
import TasksListHeader from "./TasksListHeader";
import Tasks from "./Tasks";
import TasksContextProvider from "../contexts/TasksContext";
const TasksList = () => {
  return (
    <TasksContextProvider>
      <section className="mb-20" id="tasks">
        <Container>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TasksListHeader
              onOpenModal={() => setModalShow(true)}
              onOpenConfirmModal={() => setConfirmModalShow(true)}
            />
            <Tasks />
          </div>
        </Container>
      </section>
    </TasksContextProvider>
  );
};

export default TasksList;
