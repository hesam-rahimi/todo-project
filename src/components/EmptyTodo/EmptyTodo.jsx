import EmptyDarkIcon from "../../public/icons/EmptyDarkIcon";
import EmptyLightIcon from "../../public/icons/EmptyLightIcon";

const EmptyTodo = ({ darkMode }) => {
  return (
    <div>
      {darkMode ? <EmptyDarkIcon className="!w-96 !h-72" /> : <EmptyLightIcon className="!w-96 !h-72" />}
      <p className="text-center text-3xl dark:text-white text-secondary mt-4">Empty ...</p>
    </div>
  );
};

export default EmptyTodo;
