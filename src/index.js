import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <div className = "p-3 font-mono bg-cyan-100">
        <Shop />
        <button className="p-3 border rounded-xl text-white bg-blue-500 hover:bg-blue-700 block ml-auto mr-auto" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </div>
    );
  } else {
    return (
      <div className = "p-3 ">
        <h2 className = "p-3 text-xl font-mono">Нужно залогиниться!</h2>
        <button className="p-3 border rounded-xl text-white bg-blue-500 hover:bg-blue-700" onClick={() => setLogin(true)}>
          Войти
        </button>
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
