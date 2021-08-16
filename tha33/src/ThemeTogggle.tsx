import { useContext } from "react"
import ThemeContext from "./ThemeContext"
import { ThemeContextTpye } from "./ThemeContext"
const ThemeToggle = () =>{
    const { theme,setTheme } = useContext<ThemeContextTpye>(ThemeContext)
    return (
        <button className={theme ? "theme-toggle" : "theme-toggle  dark"} onClick={()=>{
            setTheme(!theme);
        }}>
            {theme?"light":"Dark"}

        </button>
    )
}
export default ThemeToggle;