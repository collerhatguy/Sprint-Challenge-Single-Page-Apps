import React, { useState } from "react";

export default function SearchForm({setData}) {
  const [search, setSearch] = useState();
  const QuerySearch = (search, setData) => {
      setData(prevData => {
        prevData.filter(character => {
          return character.name.includes(search);
        })
      })
  }
  return (
    <section className="search-form">
      <form onSubmit={QuerySearch(search, setData)}>
        <label for="search">
          Search:
          <input type="text" name="search" id="search" onChange={e => setSearch(e.target.value)}></input>
        </label>
      </form>
    </section>
  );
}
