import React from "react";
import axios from "axios";
import animalURL from "../utils/animalURL";
import { AnimalCreator, RecentAnimals } from ".";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.sampleAnimals = [
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
    ];

    this.state = {
      recentAnimals: this.sampleAnimals,
      currentAnimal: this.sampleAnimals ? this.sampleAnimals[0] : {},
    };
  }

  componentDidMount = () => {
    this.getAnimals();
  };

  getAnimals = () => {
    axios.get(animalURL).then((res) => {
      if (res) {
        this.setState({
          recentAnimals: res.data,
          currentAnimal: res.data[0],
        });
      }
    });
  };

  loadAnimal = (animal) => {
    this.setState({
      currentAnimal: animal,
    });
  };

  render = () => {
    const { recentAnimals, currentAnimal } = this.state;

    return (
      <div style={{ ...styles.home, ...styles.centerItems }}>
        <AnimalCreator {...{ currentAnimal }} getAnimals={this.getAnimals} />
        <RecentAnimals {...{ recentAnimals }} loadAnimal={this.loadAnimal} />
      </div>
    );
  };
}

const styles = {
  home: {
    minHeight: "100vh",
    minWidth: "100vw",
    flexDirection: "column",
    backgroundColor: "lightgreen",
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
