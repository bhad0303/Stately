import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;
 