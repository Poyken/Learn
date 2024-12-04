import { useContext } from "react";
import { AppContext } from "../../App";

export default function Header() {
  const { message, theme, setTheme } = useContext(AppContext);
  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <h3>{message}</h3>
    </div>
  );
}
