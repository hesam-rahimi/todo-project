import { useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
const DarkMode = ({ darkMode, setDarkMode }) => {
  useEffect(() => {}, []);

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
      <div className="bg-primary h-full flex items-center rounded-md px-2.5">
        {darkMode ? (
          <GoSun className="!w-6 !h-6 text-white" onClick={lightModeHandler} />
        ) : (
          <FiMoon className="!w-6 !h-6 text-white" onClick={darkModeHandler} />
        )}
      </div>
    </div>
  );
};

export default DarkMode;
