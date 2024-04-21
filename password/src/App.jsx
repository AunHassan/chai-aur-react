import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const PasswordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "0123456789";
    if (characterAllowed) str += '!@#$%^&*()_+{}:"<>?`~';

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberallowed, characterAllowed]);

  const PasswordRefernce = useRef(Password);

  const copyPassword = useCallback(() => {
    PasswordRefernce.current?.select();

    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="w-full h-screen ">
        <div className="border-black border-2 m-32">
          <h1 className="text-center font-extrabold text-2xl">
            Password Generator
          </h1>
          <div className="bg-slate-200 m-9 p-3 flex justify-around ">
            <input
              type="text"
              placeholder="Password"
              className="flex-auto bg-white p-2"
              value={Password}
              ref={PasswordRefernce}
              readOnly
            />
            <button
              className="bg-yellow-500 h-auto w-20 rounded-lg mx-2"
              onClick={() => copyPassword(Password)}
            >
              copy
            </button>
          </div>
          <div className=" p-3 m-9 text-2xl flex gap-7 font-bold">
            <div className="flex-auto">
              <input
                type="range"
                name="length"
                id=""
                className=" m-2"
                value={length}
                onChange={(e) => setlength(e.target.value)}
              />
              <label htmlFor="length">length : {length}</label>
            </div>
            <div className="flex-auto ">
              <input
                type="checkbox"
                name="number"
                className="size-5 m-2"
                value={numberallowed}
                onClick={() => setnumberallowed(!numberallowed)}
              />
              <label htmlFor="length">Numbers</label>
            </div>
            <div className="flex-auto">
              <input
                type="checkbox"
                name="length"
                id=""
                className="size-5 m-2"
                value={characterAllowed}
                onClick={() => setcharacterAllowed(!characterAllowed)}
              />
              <label htmlFor="length">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
