import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";

export default function App() {
  // get data
  const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  const getData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json.results);
  }
  useEffect(() => {
    getData(url)
  }, [])
  console.log(data);
  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}
