import { useEffect, useState } from "react";
import EditIcon from "../../public/icons/EditIcon";
import TrashIcon from "../../public/icons/TrashIcon";
import { FaCheck } from "react-icons/fa";
const TodoBox = ({ text, isComplete, todos, id, getAllTodo }) => {
  const [showTodoDetail, setShowTodoDetail] = useState(false);
  const [isCompleted, setIsCompleted] = useState(isComplete);

  useEffect(() => {
    const mainTodo = todos.find((todo) => todo.id === id);
    mainTodo.isComplete = isCompleted;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [id, isCompleted, todos]);

  const deleteTodoHandler = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    getAllTodo();
  };

  return (
    <div
      className="flex items-center justify-between w-5/12 border-b border-primary/50 pb-4 px-4"
      onMouseEnter={() => setShowTodoDetail(true)}
      onMouseLeave={() => setShowTodoDetail(false)}
    >
      <div className="flex cursor-pointer w-[90%]" onClick={() => setIsCompleted((prev) => !prev)}>
        <div
          className={`border-primary border w-8 h-8 rounded-sm mr-4 flex justify-center items-center ${
            isCompleted ? "bg-primary" : "bg-transparent"
          }`}
        >
          {isCompleted ? <FaCheck className="text-white text-xl" /> : null}
        </div>
        <p
          className={`text-2xl ${
            isCompleted ? "!text-secondary/50 dark:!text-[#FFFFFF]/50 line-through decoration-1" : "dark:text-white text-secondary"
          }`}
        >
          {text}
        </p>
      </div>

      <div className={`gap-2 ${showTodoDetail ? "flex" : "hidden"}`}>
        <div>
          <EditIcon className="!w-5 !h-5 hover:!stroke-primary cursor-pointer" />
        </div>
        <div onClick={deleteTodoHandler}>
          <TrashIcon className="!w-5 !h-5 stroke-[#CDCDCD] hover:!stroke-red-600 !text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TodoBox;
