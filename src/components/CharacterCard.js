import React from "react";

export default function CharacterCard( { character }) {
  
  return <div className="charachter-card">
      <h2>Name: {character.name}</h2>
      <h3>Species: {character.species}</h3>
      <h3>Status: {character.status}</h3>
      <img src={character.image} alt={`${character.name} picture`}></img>
      <div>From: {character.location.name}</div>
      <img src={character.location.url} alt={`${character.location.name} picture`}></img>
      <div>Origin: {character.origin.name}</div>
      <img src={character.origin.url} alt={`${character.origin.name} picture`}></img>
      <p>Is in {character.episode.length} episode[s]</p>
    </div>;
}
