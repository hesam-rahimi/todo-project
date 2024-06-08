import { useState } from "react";
import SearchIcon from "../../public/icons/SearchIcon";

const CustomInput = ({ searchIcon, className, placeholder, value, setValue, autoFocus = false, onEnter }) => {
  const [isFocus, setIsFocus] = useState(false);
  const onEnterHandler = (event) => event.keyCode === 13 && onEnter();
  return (
    <div className={`border border-primary py-2 px-4 gap-x-2 rounded-md flex justify-between ${isFocus && "ring-1 ring-primary"} ${className}`}>
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoFocus={autoFocus}
        onKeyUp={onEnterHandler}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder={placeholder}
        className="w-full border-0 ring-0 outline-none bg-transparent text-secondary dark:text-white"
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
