import React from "react";
import { AnimalCreator, RecentAnimals } from ".";

class Home extends React.Component {
  componentDidMount = () => {
    // TODO: GET /animals
  };

  render = () => {
    return (
      <div style={{ ...styles.home, ...styles.centerItems }}>
        <AnimalCreator />
        <RecentAnimals />
      </div>
    );
  };
}

export default Home;

const styles = {
  home: {
    minHeight: "100vh",
    minWidth: "100vw",
    flexDirection: "column",
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
