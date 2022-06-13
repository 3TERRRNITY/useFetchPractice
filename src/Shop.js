import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/")
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {loader ? <h2>Загружаем товары</h2> : ""}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
