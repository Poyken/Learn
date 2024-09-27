import moment from "moment";
import "./assets/scss/style.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import background from "./assets/img/background.png";
import config from "./config.json";
const { SERVER_API } = config;
export const App = () => {
  return `
  ${Header()}
  <h1>App</h1>
  <img src="${background}" alt="" width="50%">
  ${Footer()}
  </p>${SERVER_API}</p>
  <h2>${moment().format("LLLL")}</h2>
  `;
};
