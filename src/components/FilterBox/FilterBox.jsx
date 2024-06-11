import { useEffect, useState } from "react";
import ChevronDown from "../../public/icons/ChevronDown";

const options = [
  { id: 1, name: "All" },
  { id: 2, name: "Complete" },
  { id: 3, name: "Incomplete" },
];
const FilterBox = ({ open, setOpen, todos, setFilteredTodos, setSearchedTodo }) => {
  const [mainFilter, setMainFilter] = useState(options[0]);

  useEffect(() => {
    switch (mainFilter.id) {
      case 1:
        setFilteredTodos([...todos]);
        setSearchedTodo([...todos]);
        break;
      case 2:
        setFilteredTodos([...todos].filter((todo) => todo.isComplete === true));
        setSearchedTodo([...todos].filter((todo) => todo.isComplete === true));
        break;
      case 3:
        setFilteredTodos([...todos].filter((todo) => todo.isComplete === false));
        setSearchedTodo([...todos].filter((todo) => todo.isComplete === false));
        break;
      default:
        setFilteredTodos([...todos]);
    }
  }, [mainFilter.id, setFilteredTodos, setSearchedTodo, todos]);

  return (
    <div className="self-stretch relative">
      <div
        onClick={(event) => {
          event.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="cursor-pointer text-white bg-primary flex justify-between items-center h-full min-w-40 px-2 rounded-md"
      >
        <span className="font-bold text-base">{mainFilter.name.toUpperCase()}</span>

        {open ? (
          <ChevronDown className="!w-4 !h-4 rotate-180 transition-all duration-200" />
        ) : (
          <ChevronDown className="!w-4 !h-4 transition-all duration-200" />
        )}
      </div>
      <div className={`bg-white w-full py-2 rounded-md border border-primary absolute top-12 ${open ? "showFilterBox" : "hidden"}`}>
        {options.map((item) => (
          <div
            className={`${item.name == mainFilter.name && "bg-primary/30"} pl-2 p-0.5 text-primary ${open && "cursor-pointer"}`}
            key={item.id}
            onClick={() => open && setMainFilter(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
