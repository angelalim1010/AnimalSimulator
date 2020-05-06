import React from "react";
import { AnimalCreator, RecentAnimals } from ".";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentAnimals: [
        {
          id: 1,
          name: "Bella",
          type: 1,
        },
        {
          id: 2,
          name: "Oscar",
          type: 3,
        },
        {
          id: 3,
          name: "Max",
          type: 3,
        },
        {
          id: 4,
          name: "Coco",
          type: 2,
        },
        {
          id: 5,
          name: "Oliver",
          type: 4,
        },
      ],
    };
  }

  componentDidMount = () => {
    // TODO: GET /animals
  };

  render = () => {
    const { recentAnimals } = this.state;
    const currentAnimal = recentAnimals ? recentAnimals[0] : null;

    return (
      <div style={{ ...styles.home, ...styles.centerItems }}>
        <AnimalCreator {...{ currentAnimal }} />
        <RecentAnimals {...{ recentAnimals }} />
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
