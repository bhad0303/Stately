import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

export const ThemeProviderComponent = ({ children }) => {
  // Get initial theme from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Toggle theme function
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  // Memoized theme to prevent unnecessary re-renders
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#FFC107" }, // Gold accent like the "STATELY" logo
                secondary: { main: "#1976d2" }, // Blue for buttons/tabs
                background: {
                  default: "#ffffff", // White main background
                  paper: "#f5f5f5", // Light gray for sections
                },
                text: {
                  primary: "#000000", // Black text
                  secondary: "#757575", // Gray text
                },
              }
            : {
                primary: { main: "#FFC107" },
                secondary: { main: "#90caf9" }, // Light blue in dark mode
                background: {
                  default: "#121212", // Dark background
                  paper: "#1e1e1e", // Dark gray for cards
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#bdbdbd",
                },
              }),
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
          h1: { fontSize: "1.8rem", fontWeight: 600 },
          h2: { fontSize: "1.6rem", fontWeight: 600 },
          body1: { fontSize: "1rem" },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "8px", // Rounded buttons like your dashboard
                textTransform: "none", // No uppercase
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
