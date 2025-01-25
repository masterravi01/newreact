import React, { useState, useCallback, useEffect, useRef } from "react";

const Password = () => {
  useEffect(() => {});

  const [passLen, setPassLen] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdedfghijklmnopqrstruvwxyz";
    if (isNumAllowed) str += "01234567889";
    if (isCharAllowed) str += "@#$%*";
    for (let i = 1; i <= passLen; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLen, isNumAllowed, isCharAllowed, setPassword]);

  const passWordRef = useRef(null);

  const copyPasswordFn = useCallback(() => {
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [passLen, isNumAllowed, isCharAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 yext-orange-500 bg-sky-700 text-white">
        <h1 className="text-4xl text-center">Password Generater</h1>
        <div className="flex shadow rounded-lg overflow-hidden mbg-4 mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passWordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordFn}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={passLen}
              className="cursor-pointer"
              onChange={(e) => {
                setPassLen(e.target.value);
              }}
            />
            <label>Length: {passLen}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumAllowed}
              id="numberInput"
              onChange={() => {
                setIsNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="characterInput"
              onChange={() => {
                setIsCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
