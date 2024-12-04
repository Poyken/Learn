import "./Theme.css";
import Header from "./Header";
import Content from "./Content";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Theme() {
  const { theme } = useContext(AppContext);
  return (
    <div className={`theme-${theme}`}>
      <Header></Header>
      <Content></Content>
    </div>
  );
}
