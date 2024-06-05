import { useEffect, useState } from "react";
import "./App.css";
import FilterBox from "./components/FilterBox/FilterBox";
import EmptyDarkIcon from "./public/icons/EmptyDarkIcon";
import EmptyLightIcon from "./public/icons/EmptyLightIcon";
import DarkMode from "./components/DarkMode/DarkMode";
import TodoBox from "./components/TodoBox/TodoBox";
import AddTodoBtn from "./components/AddTodoBtn/AddTodoBtn";
import AddTodoModal from "./components/AddTodoModal";
import CustomInput from "./components/utils/CustomInput";

function App() {
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) ? true : false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div onClick={() => setOpenFilterBox(false)} className="h-screen m-0 p-0 bg-white dark:bg-secondary">
      <div className="p-10 flex flex-col items-center">
        <h2 className="mb-5 text-3xl font-semibold dark:text-white text-secondary">TODO LIST</h2>
        <div className="flex items-center w-full justify-center gap-x-5 mb-12">
          <CustomInput darkMode={darkMode} className="w-5/12" searchIcon placeholder="Search note..." />
          <FilterBox open={openFilterBox} setOpen={setOpenFilterBox} />
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div>
          {darkMode ? <EmptyDarkIcon className="!w-96 !h-72" /> : <EmptyLightIcon className="!w-96 !h-72" />}
          <p className="text-center text-3xl dark:text-white text-secondary mt-4">Empty ...</p>
        </div>
        <TodoBox />
      </div>
      <AddTodoBtn onClick={() => setOpenAddTodoModal(true)} />
      <AddTodoModal open={openAddTodoModal} setOpen={setOpenAddTodoModal} darkMode={darkMode} />
    </div>
  );
}

export default App;
