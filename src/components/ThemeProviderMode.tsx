import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export default function ThemeMode({ children }: any) {
  const [darkMode, setDarkMode] = useState(() => {
    const getDarkMode = localStorage.getItem("isDarkModeActive");
    return getDarkMode ? JSON.parse(getDarkMode) == true : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkModeActive", JSON.stringify(darkMode));
  }, [darkMode]);

  const appTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  function handleChangeMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <div className="header1 w-[100%] flex justify-center ">
        <div className=" container mx-auto fixed top-0 flex justify-between items-center  p-3">
          <div >01064880594</div>
          <div className="cursor-pointer" onClick={handleChangeMode}>
            {darkMode ? <DarkModeIcon /> : <WbSunnyIcon />}
          </div>
        </div>
        </div>
    
        {children}
      </ThemeProvider>
    </>
  );
}
