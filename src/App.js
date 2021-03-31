import React from "react";
import Header from "./components/Header.js";

export default function App() {
  const url = "https://rickandmortyapi.com/api/character";
  async function getData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        return json;
      } 
    }
    catch(err) {console.log(err)}
  } 
  const data = getData(url);
  
  return (
    <main data-testid='app'>
      <Header />
    </main>
  );
}
