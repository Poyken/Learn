import { forwardRef, memo, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(
    ref,
    () => {
      const obj = {
        focus: () => inputRef.current.focus(),
        // value: (value) => (inputRef.current.value = value),
      };
      Object.defineProperty(obj, "value", {
        get: () => inputRef.current.value,
        set: (value) => {
          inputRef.current.value = value;
        },
      });
      Object.defineProperty(obj, "className", {
        get: () => inputRef.current.className,
        set: (value) => {
          inputRef.current.className = value;
        },
      });
      return obj;
    },
    []
  );
  return (
    <div>
      <input type="text" name="" id="" className="ducnv" ref={inputRef} />
    </div>
  );
}
export default memo(forwardRef(Input));
