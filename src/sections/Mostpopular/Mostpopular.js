import React from "react";
import "./Mostpopular.css";
import {Card,SectionHeader,Sectionwarpper} from "../../componets/index.js"
import games from "../../Data/donner.js"


function Mostpopular() {
    const donat=games.map((game, index) => (
        <Card
          key={index}
          img={game.img}
          name={game.name}
          sand={game.sand}
          ex1={game.ex1}
          ex2={game.ex2}
        />
      ))
  
  return (
    <div>
      <Sectionwarpper >
       <SectionHeader >Most popular</SectionHeader>
        <div className="most-popular-items">
          {donat}
        </div>
      </Sectionwarpper>
    </div>
  );
}

export default Mostpopular;
