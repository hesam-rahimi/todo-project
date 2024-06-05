import { useState } from "react";
import SearchIcon from "../../public/icons/SearchIcon";

const CustomInput = ({ darkMode, searchIcon, className, placeholder }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={`border border-primary py-2 px-4 gap-x-2 rounded-md flex justify-between ${isFocus && "ring-1 ring-primary"} ${className}`}>
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        type="text"
        placeholder={placeholder}
        className={`w-full border-0 ring-0 outline-none bg-transparent ${darkMode ? "text-white" : "text-secondary"}`}
      />

      {searchIcon && (
        <div>
          <SearchIcon className="text-primary cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default CustomInput;
