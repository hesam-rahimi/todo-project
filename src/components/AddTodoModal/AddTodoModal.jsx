import { useId, useState } from "react";
import CustomBtn from "../utils/CustomBtn";
import CustomInput from "../utils/CustomInput";
import ModalContainer from "../utils/ModalContainer";

const AddTodoModal = ({ open, setOpen, getAllTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  const id = useId();
  const addTodoHandler = () => {
    if (inputValue.trim().length) {
      const newTodoInfo = {
        id: id + todos.length + 1 + inputValue,
        text: inputValue,
        isComplete: false,
      };
      localStorage.setItem("todos", JSON.stringify([...todos, newTodoInfo]));
      getAllTodo();
      setOpen(false);
      setInputValue("");
    }
  };

  const closeModal = () => {
    setOpen(false);
    setInputValue("");
  };

  return (
    <ModalContainer title="new todo" open={open} setOpen={setOpen}>
      <div className="flex flex-col !h-4/5 justify-between">
        <CustomInput onEnter={addTodoHandler} autoFocus={true} placeholder="Input your note..." value={inputValue} setValue={setInputValue} />
        <div className="flex justify-between items-center">
          <CustomBtn text="CANCEL" className="border-primary border dark:text-white" onClick={closeModal} />
          <CustomBtn text="APPLY" className="bg-primary text-white border-primary border" onClick={addTodoHandler} />
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddTodoModal;
