import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="m-3 border rounded-xl bg-cyan-200 shadow-md">
      <img src={info.image} alt={info.name} className = "p-3 block ml-auto mr-auto" />
      <div className="p-3">
        <h2 className = "text-xl font-semibold">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="flex">
        <button
          className="p-3 m-3 border border-black rounded-md bg-cyan-400 hover:bg-cyan-700" 
          disabled={total === 0}
          onClick={handleLessClick}
        >
          –
        </button>
        <h3 className="p-3 m-3 text-xl">{total ? total : "0"}</h3>
        <button className="p-3 m-3 border border-black rounded-md bg-cyan-400 hover:bg-cyan-700" onClick={handleMoreClick}>
          +
        </button>
      </div>
    </div>
  );
}
