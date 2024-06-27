import { useDispatch } from "react-redux";
import { ModalContainer, ModalContent, Row, ButtonComponent } from "./styled";
import { ExitIcon } from "../../assets/icons";
import Button from "../custom-button";
import { useModal } from "../../models/context/useModal";
import { useState } from "react";
import { addTask } from "../../models/redux/tasks";
import { useNotification } from "../../models/context/useNotification";

export default function Modal() {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();
  const { open, setOpen } = useModal();
  const { getError, getSuccess } = useNotification();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = () => {
    if (taskInput.trim() === "") {
      getError("You must write a description");
      return;
    }
    dispatch(addTask({ id: self.crypto.randomUUID(), description: taskInput }));
    setTaskInput("");
    getSuccess("Task created successfully, Mario :)");
    setOpen(false);
  };

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <ModalContainer open={open}>
      <ButtonComponent
        style={{ position: "absolute", right: 10, top: 5, marginBottom: 5 }}
        onClick={() => setOpen(false)}
      >
        {ExitIcon}
      </ButtonComponent>
      <ModalContent>
        <input
          type="text"
          placeholder="Type your new task..."
          value={taskInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Row>
          <Button
            color="secondary"
            onClick={handleCreate}
            description="Add Task"
          />
        </Row>
      </ModalContent>
    </ModalContainer>
  );
}
