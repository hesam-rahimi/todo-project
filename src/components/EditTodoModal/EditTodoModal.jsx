import { useState } from "react";
import CustomBtn from "../utils/CustomBtn";
import CustomInput from "../utils/CustomInput";
import ModalContainer from "../utils/ModalContainer";

const EditTodoModal = ({ open, setOpen, getAllTodo, todo }) => {
  const [inputValue, setInputValue] = useState(todo.text);
  const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  const mainTodo = todos.find((item) => item.id === todo.id);

  const editTodoHandler = () => {
    if (inputValue.trim().length) {
      mainTodo.text = inputValue;
      localStorage.setItem("todos", JSON.stringify(todos));
      setOpen(false);
      getAllTodo();
    }
  };

  const closeModal = () => {
    setOpen(false);
    setInputValue(todo.text);
  };

  return (
    <ModalContainer title="edit todo" open={open} setOpen={setOpen}>
      <div className="flex flex-col !h-4/5 justify-between">
        <CustomInput onEnter={editTodoHandler} autoFocus={true} placeholder="Input your note..." value={inputValue} setValue={setInputValue} />
        <div className="flex justify-between items-center">
          <CustomBtn text="CANCEL" className="border-primary border dark:text-white" onClick={closeModal} />
          <CustomBtn text="APPLY" className="bg-primary text-white border-primary border" onClick={editTodoHandler} />
        </div>
      </div>
    </ModalContainer>
  );
};

export default EditTodoModal;
