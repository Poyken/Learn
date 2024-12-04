import { createContext } from "react";
import Theme from "./component/Theme/Theme";
import { useState } from "react";
export const AppContext = createContext();
export default function App() {
  const [message, setMessage] = useState("temp");
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider value={{ message, setMessage, theme, setTheme }}>
      <Theme></Theme>
    </AppContext.Provider>
  );
}
