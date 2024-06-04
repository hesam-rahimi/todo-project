import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
const DarkMode = ({ darkMode, setDarkMode }) => {
  const lightModeHandler = () => {
    setDarkMode(false);
    localStorage.setItem("darkMode", false);
  };

  const darkModeHandler = () => {
    setDarkMode(true);
    localStorage.setItem("darkMode", true);
  };
  return (
    <div className="self-stretch cursor-pointer">
      {darkMode ? (
        <div className="bg-primary h-full flex items-center rounded-md px-2.5" onClick={lightModeHandler}>
          <GoSun className="!w-6 !h-6 text-white" />
        </div>
      ) : (
        <div className="bg-primary h-full flex items-center rounded-md px-2.5" onClick={darkModeHandler}>
          <FiMoon className="!w-6 !h-6 text-white" />
        </div>
      )}
    </div>
  );
};

export default DarkMode;
