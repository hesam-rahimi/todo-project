import { useCallback, useEffect, useState } from "react";
import "./App.css";
import FilterBox from "./components/FilterBox/FilterBox";
import DarkMode from "./components/DarkMode/DarkMode";
import TodoBox from "./components/TodoBox/TodoBox";
import AddTodoBtn from "./components/AddTodoBtn/AddTodoBtn";
import AddTodoModal from "./components/AddTodoModal/AddTodoModal";
import CustomInput from "./components/utils/CustomInput";
import EmptyTodo from "./components/EmptyTodo/EmptyTodo";

function App() {
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [searchedTodo, setSearchedTodo] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const getAllTodo = useCallback(() => {
    localStorage.getItem("todos") ? setTodos(JSON.parse(localStorage.getItem("todos"))) : setTodos([]);
    localStorage.getItem("todos") ? setSearchedTodo(JSON.parse(localStorage.getItem("todos"))) : setSearchedTodo([]);
    setSearchValue("");
  }, []);

  useEffect(() => {
    getAllTodo();
    setSearchValue("");
  }, [getAllTodo]);

  const onSearchHandler = (value) => {
    setSearchValue(value);
    const result = todos.filter((todo) => todo.text.includes(value));
    setSearchedTodo(result);
  };

  useEffect(() => {
    localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode")) === true
        ? setDarkMode(true)
        : setDarkMode(false)
      : localStorage.setItem("darkMode", true);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div onClick={() => setOpenFilterBox(false)} className="min-h-svh m-0 p-0 bg-white dark:bg-secondary">
      <div className="p-10 flex flex-col items-center">
        <h2 className="mb-5 text-3xl font-semibold dark:text-white text-secondary">TODO LIST</h2>
        <div className="flex items-center w-full justify-center gap-x-5 mb-12">
          <CustomInput
            className="w-5/12"
            searchIcon
            placeholder="Search note..."
            value={searchValue}
            // setValue={setSearchValue}
            onChange={onSearchHandler}
          />
          <FilterBox
            open={openFilterBox}
            setOpen={setOpenFilterBox}
            filteredTodos={filteredTodos}
            setFilteredTodos={setFilteredTodos}
            todos={todos}
          />
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        {!filteredTodos?.length ? (
          <EmptyTodo darkMode={darkMode} />
        ) : (
          <div className="w-full gap-y-6 gap-x-5 flex-col flex justify-center items-center">
            {filteredTodos.map((todo) => (
              <TodoBox setTodos={setTodos} key={todo.id} {...todo} todos={todos} getAllTodo={getAllTodo} />
            ))}
          </div>
        )}
      </div>
      <AddTodoBtn onClick={() => setOpenAddTodoModal(true)} />
      <AddTodoModal getAllTodo={getAllTodo} open={openAddTodoModal} setOpen={setOpenAddTodoModal} />
    </div>
  );
}

export default App;
