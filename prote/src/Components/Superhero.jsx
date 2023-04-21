import React, { useState, useEffect } from "react";
import "./Superhero.css";

function Superheroe() {
  const superheroIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const [superheroData, setSuperheroData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newSuperheroData = [];
      for (let i = 0; i < superheroIds.length; i++) {
        const response = await fetch(
          `https://www.superheroapi.com/api.php/10230497996100821/${superheroIds[i]}`
        );
        const data = await response.json();
        newSuperheroData.push(data);
      }
      setSuperheroData(newSuperheroData);
    }
    fetchData();
  }, [superheroIds]);

  function flipCard(index) {
    const updatedSuperheroData = [...superheroData];
    updatedSuperheroData[index].isFlipped = !updatedSuperheroData[index].isFlipped;
    setSuperheroData(updatedSuperheroData);
  }

  return (
    <div className="Superhero">
      {superheroData.map((superhero, index) => (
        <div
          key={superhero.id}
          className={`card ${superhero.isFlipped ? "is-flipped" : ""}`}
          onClick={() => flipCard(index)}
        >
          <div className="card-front">
            <img src={superhero.image?.url} />
            {/* <h1>{superhero.name}</h1> */}
          </div>
          <div className="card-back">
            <h1>{superhero.name}</h1>
            
            <p>Gender: {superhero.appearance.gender}</p>
            <p>Race: {superhero.appearance.race}</p>
            <p>Durability: {superhero.powerstats.durability}</p>
            <p>Intelligence: {superhero.powerstats.intelligence}</p>
            <p>Power: {superhero.powerstats.power}</p>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Superheroe;