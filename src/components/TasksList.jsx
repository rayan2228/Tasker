import React, { useState } from "react";
import Container from "./layouts/Container";
import TasksListHeader from "./TasksListHeader";
import Tasks from "./Tasks";
import { useDispatch } from "../contexts/TasksContext";
import Modal from "./layouts/Modal";
import ConfirmModal from "./layouts/ConfirmModal";
import Button from "./layouts/Button";
const TasksList = () => {
  const [showModal, setModalShow] = useState(false);
  const [showConfirmModal, setConfirmModalShow] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [deleteAllTask, setDeleteAllTask] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setModalShow(true);
  };
  const handleDelete = (taskId) => {
    setConfirmModalShow(true);
    setDeleteTaskId(taskId);
  };
  return (
    <section className="mb-20" id="tasks">
      <Container>
        {showModal && <Modal onClose={() => setModalShow(false)} />}
        {showConfirmModal && (
          <ConfirmModal deleteAllTask={deleteAllTask}>
            {deleteAllTask ? (
              <Button
                className={"bg-red-500"}
                onClick={() => {
                  dispatch({
                    type: "deleteAllTask",
                  }),
                    setConfirmModalShow(false);
                }}
              >
                Delete
              </Button>
            ) : (
              <Button
                className={"bg-red-500"}
                onClick={() => {
                  dispatch({
                    type: "deleteTask",
                    deleteTaskId,
                  }),
                    setConfirmModalShow(false);
                }}
              >
                Delete
              </Button>
            )}

            <Button
              className={"bg-green-500"}
              onClick={() => setConfirmModalShow(false)}
            >
              Close
            </Button>
          </ConfirmModal>
        )}
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TasksListHeader
            onOpenModal={() => setModalShow(true)}
            onOpenConfirmModal={() => {
              setConfirmModalShow(true);
              setDeleteAllTask(true);
            }}
          />
          <Tasks onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </Container>
    </section>
  );
};

export default TasksList;
