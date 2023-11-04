import * as React from "react";

const SettingsContext = React.createContext({});

const SettingsProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = React.useState<string>(
    localStorage.getItem("theme")!
  );
  const [collapse, setCollapse] = React.useState<boolean>(true);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(0);
  const toggleMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
    localStorage.setItem("theme", darkMode === "dark" ? "light" : "dark");
  };
  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        toggleMode,
        collapse,
        setCollapse,
        focusedIndex,
        setFocusedIndex,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
