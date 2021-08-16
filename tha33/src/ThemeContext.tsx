import { createContext } from "react";

export interface ThemeContextTpye {
    theme:boolean,
    setTheme:(theme:boolean) => void,
}
const initialState : ThemeContextTpye = {
    theme : false,
    setTheme:(theme:boolean) => {}
}
const ThemeContext = createContext<ThemeContextTpye>(initialState)
export default ThemeContext;