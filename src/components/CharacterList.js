import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

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
  return (
    <section className="character-list">
      <SearchForm setData={setData} />
      {data.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </section>
  );
}
