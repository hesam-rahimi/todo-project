import { FaPlus } from "react-icons/fa6";
const AddTodoBtn = ({ onClick }) => {
  return (
    <div className="fixed right-60 bottom-10 rounded-full cursor-pointer" onClick={onClick}>
      <div className="bg-primary text-white flex justify-center items-center p-2 rounded-full ring-1 ring-primary/20">
        <FaPlus className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default AddTodoBtn;
