import { useState } from "react";
import "./App.css";
import SearchIcon from "./svg/SearchIcon";
import FilterBox from "./components/FilterBox/FilterBox";

function App() {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="m-10 flex flex-col items-center">
      <h2 className="mb-5 text-xl font-semibold">TODO LIST</h2>
      <div className="flex items-center w-full justify-center gap-x-5">
        <div className={`border border-primary py-2 px-4 gap-x-2 rounded-md flex justify-between w-5/12 ${isFocus && "ring-1 ring-primary"}`}>
          <input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            type="text"
            className="w-full border-0 ring-0 outline-none"
            placeholder="Search note..."
          />
          <div>
            <SearchIcon className="text-primary cursor-pointer" />
          </div>
        </div>
        <FilterBox />
      </div>
    </div>
  );
}

export default App;
