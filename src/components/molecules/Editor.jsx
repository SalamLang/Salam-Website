import { useEffect, useRef } from "react";
import ListButtonEditor from "./ListButtonEditor";

export default function Editor() {
  const editableDivRef = useRef(null);

  const handleInput = () => {
    if (editableDivRef.current) {
      const contentLength = editableDivRef.current.innerText.trim().length;
    }
  };

  useEffect(() => {
    editableDivRef?.current?.focus();
  }, []);

  return (
    <div
      className={`w-full md:[90%] lg:max-w-[70%] h-full py-4 px-6 flex max-sm:flex-col justify-between items-center`}
    >
      <div
        ref={editableDivRef}
        className="w-full max-h-[600px] h-[600px] overflow-auto bg-cream-light p-5 rounded-2xl outline-none ring-0 border-0"
        contentEditable={true}
        onInput={handleInput}
        autoFocus={true}
      ></div>
      <ListButtonEditor />
    </div>
  );
}
