import "./GamingLibray.css"
import { GamingLibaryCard, SectionHeader, Sectionwarpper } from "../../componets/index.js"
import GamingLibrayData from "../../Data/GamingLibary.js"

const GamingLibray = () => {
  const donat = GamingLibrayData.map((game, index) => (
    <GamingLibaryCard
      key={index}
      className="card"
      id={index}
      img={game.img}
      name={game.name}
      sand={game.sand}
      ex1={game.data_add}
      ex2={game.hours_played}
      ex3={game.link}
    />
  ));

  return (
    <Sectionwarpper>
      <SectionHeader>Gaming Libray</SectionHeader>
      <div className="gaming-libary-cards">
        {donat}
      </div>
    </Sectionwarpper>
  );
};

export default GamingLibray;
