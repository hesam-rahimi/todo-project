import { useState } from "react";
import ChevronDown from "../../svg/ChevronDown";

const FilterBox = () => {
  const [mainFilter, setMainFilter] = useState("All");

  const options = [
    { id: 1, name: "All" },
    { id: 2, name: "Complete" },
    { id: 3, name: "Incomplete" },
  ];
  return (
    <div className="self-stretch relative">
      <div className="cursor-pointer text-white bg-primary flex justify-between items-center h-full min-w-36 px-2 rounded-md">
        <span className="font-bold">{mainFilter.toUpperCase()}</span> <ChevronDown className="!w-4 !h-4" />
      </div>
      <div className="w-full py-2 rounded-md border border-primary absolute top-12">
        {options.map((item) => (
          <p
            className={`${item.name == mainFilter && "bg-primary/30"} pl-2 p-0.5 text-primary`}
            key={item.id}
            onClick={() => setMainFilter(item.name)}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
