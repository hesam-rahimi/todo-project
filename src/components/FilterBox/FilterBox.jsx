import { useState } from "react";
import ChevronDown from "../../public/icons/ChevronDown";

const FilterBox = () => {
  const [mainFilter, setMainFilter] = useState("All");
  const [open, setOpen] = useState(false);

  const options = [
    { id: 1, name: "All" },
    { id: 2, name: "Complete" },
    { id: 3, name: "Incomplete" },
  ];
  return (
    <div className="self-stretch relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer text-white bg-primary flex justify-between items-center h-full min-w-40 px-2 rounded-md"
      >
        <span className="font-bold text-base">{mainFilter.toUpperCase()}</span>

        {open ? (
          <ChevronDown className="!w-4 !h-4 rotate-180 transition-all duration-200" />
        ) : (
          <ChevronDown className="!w-4 !h-4 transition-all duration-200" />
        )}
      </div>
      <div className={`w-full py-2 rounded-md border border-primary absolute top-12 ${open ? "showFilterBox" : "hidden"}`}>
        {options.map((item) => (
          <div
            className={`${item.name == mainFilter && "bg-primary/30"} pl-2 p-0.5 text-primary cursor-pointer`}
            key={item.id}
            onClick={() => setMainFilter(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
