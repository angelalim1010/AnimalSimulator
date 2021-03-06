import React from "react";
import AnimalTypes from "../constants/AnimalTypes";

export default class RecentAnimals extends React.Component {
  renderAnimals = () => {
    let res = [];

    for (let i = 0; i < this.props.recentAnimals.length && i < 5; ++i) {
      const animal = this.props.recentAnimals[i];
      const animalConfig = AnimalTypes[animal.type];
      res.push(
        <div
          style={{ ...styles.animal, ...styles.centerItems }}
          key={animal.id}
          onClick={() =>
            this.props.loadAnimal({ name: animal.name, type: animal.type })
          }
        >
          <img
            src={animalConfig?.imageURL}
            alt={animalConfig?.name}
            style={{ ...styles.image, ...styles.centerItems }}
          />
          <div style={styles.animalName}>{animal.name}</div>
        </div>
      );
    }

    return res;
  };

  render = () => {
    return (
      <div style={styles.recentAnimals}>
        <div style={styles.title}>Recent Animals</div>
        <div style={styles.animals}>{this.renderAnimals()}</div>
      </div>
    );
  };
}

const styles = {
  recentAnimals: {
    boxShadow: "0px 0px 8px 4px #888888",
    width: 500,
    height: 150,
    padding: "20px 40px",
    marginTop: 50,
    textAlign: "center",
    backgroundColor: "white",
  },
  title: {
    textDecoration: "underline",
  },
  animals: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
    cursor: "pointer",
  },
  animal: {
    border: "1px solid black",
    borderRadius: 5,
    boxShadow: "0px 0px 8px 4px #888888",
    height: 100,
    width: 80,
    flexDirection: "column",
  },
  image: {
    height: 60,
    width: 60,
    objectFit: "contain",
  },
  animalName: {
    marginTop: 5,
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
