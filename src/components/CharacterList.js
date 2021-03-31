import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
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
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {data.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </section>
  );
}
