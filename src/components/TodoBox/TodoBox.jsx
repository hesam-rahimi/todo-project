import EditIcon from "../../public/icons/EditIcon";
import TrashIcon from "../../public/icons/TrashIcon";

const TodoBox = () => {
  return (
    <div className="flex items-center justify-between w-5/12 border-b border-primary/50 pb-4 px-4">
      <div className="flex">
        <div className="border-primary border w-8 h-8 rounded-sm mr-4"></div>
        <p className="text-2xl font-semibold dark:text-white">NOTE #1</p>
      </div>
      <div className="flex gap-2">
        <EditIcon className="!w-5 !h-5 hover:!stroke-primary cursor-pointer" />
        <TrashIcon className="!w-5 !h-5" />
      </div>
    </div>
  );
};

export default TodoBox;
