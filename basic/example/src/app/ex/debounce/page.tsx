"use client";
import { debounce } from "@/utils/debounce";
import { useState } from "react";

const promiseFun = async (value: string) => {
  console.log("call");
  await new Promise((resolve) => setTimeout(resolve, 300));
  return "abcd" === value;
};

const DebouncePage = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [debounceState, setDebounceState] = useState<string>("");

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = await promiseFun(e.target.value);
    setDebounceState(e.target.value);
    setCheck(result);
  };

  const debouncedOnChange = debounce<typeof onChange>(onChange, 500);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <h2>중복 문자열 "abcd"</h2>
        <h3>state : {debounceState}</h3>
        <h3>check : {check ? "true" : "false"}</h3>
        <input type="text" onChange={debouncedOnChange} />
        <hr />
        <button disabled={check}>BUTTON</button>
      </div>
    </>
  );
};

export default DebouncePage;
