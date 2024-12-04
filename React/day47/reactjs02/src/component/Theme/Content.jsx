import { AppContext } from "../../App";
import { useContext } from "react";

export default function Content() {
  const { setMessage } = useContext(AppContext);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi impedit
        omnis labore officia modi laborum non id enim mollitia architecto quas
        at, nihil vero iusto unde qui accusantium. Cupiditate, mollitia?
      </p>
      <button onClick={() => setMessage("update success")}>Click me</button>
    </div>
  );
}
