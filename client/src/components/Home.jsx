import React from "react";
import { AnimalCreator, RecentAnimals } from ".";

class Home extends React.Component {
  componentDidMount = () => {
    // TODO: GET /animals
  };

  render = () => {
    return (
      <div>
        <AnimalCreator />
        <RecentAnimals />
      </div>
    );
  };
}

export default Home;
