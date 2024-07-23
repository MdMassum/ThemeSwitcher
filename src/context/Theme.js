import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",   // default variable
    darkTheme : ()=>{},   // method
    lightTheme : ()=>{} 
})
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){   // user hook
    return useContext(ThemeContext);
}