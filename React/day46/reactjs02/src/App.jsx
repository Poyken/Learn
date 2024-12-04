import { useEffect, useRef } from "react";
import Input from "./components/Input";

export default function App() {
  const data = ["Checkbox1", "Checkbox2", "Checkbox3", "Checkbox4"];
  const checkAllRef = useRef();
  const checkCountRef = useRef(0);
  const inputRef = useRef();
  const handleCheckAll = ({ target }) => {
    const status = target.checked;
    checkItemsRef.current.forEach((ref) => (ref.checked = status));
    checkCountRef.current = status ? checkItemsRef.current.length : 0;
  };

  const handleCheckItem = ({ target }) => {
    const status = target.checked;
    if (status) {
      checkCountRef.current++;
    } else {
      checkCountRef.current--;
    }
    checkAllRef.current.checked =
      checkCountRef.current === checkItemsRef.current.length;
    console.log(checkCountRef.current);
  };
  const checkItemsRef = useRef([]);
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "nguyen van duc";
    // console.log(inputRef.current.className);
  }, []);
  return (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={handleCheckAll} ref={checkAllRef} />
          Check All
        </label>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              ref={(ref) => {
                checkItemsRef.current.push(ref);
              }}
              onChange={handleCheckItem}
            />
            {item}
          </label>
        </div>
      ))}
      <Input ref={inputRef}></Input>
    </div>
  );
}
