import React from "react";
import Header from "./components/Header.js";

export default function App() {
  // get data
  const url = "https://rickandmortyapi.com/api/character";
  async function getData(url) {
    try {
      // get response
      const response = await fetch(url);
      // if no problems then
      if (response.ok) {
        // convert that from json
        const json = await response.json();
        // get the results key
        const releventData = await json.results;
        console.log(releventData);
        return releventData;
      } 
    }
    catch(err) {console.log(err)}
  } 
  const data = getData(url);
  const dataNames = data.then(data => data.map(character => {
    return character.name;
  }))
  dataNames.then(names => console.log(names))
  return (
    <main data-testid='app'>
      <Header />
      {dataNames.then(names => {
        names.map(character => {
          return <div>{character}</div>
        })
      })}
    </main>
  );
}
