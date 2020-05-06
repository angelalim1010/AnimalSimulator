import React from "react";
import AnimalTypes from "../constants/AnimalTypes";

export default class RecentAnimals extends React.Component {
  renderAnimals = () => {
    let res = [];

    for (let animal of this.props.recentAnimals) {
      res.push(
        <div
          style={{ ...styles.animal, ...styles.centerItems }}
          key={animal.id}
        >
          <img
            src={AnimalTypes[animal.type]?.imageURL}
            alt={AnimalTypes[animal.type]?.name}
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
  },
  title: {
    textDecoration: "underline",
  },
  animals: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  animal: {
    border: "1px solid black",
    borderRadius: 5,
    height: 100,
    width: 80,
    flexDirection: "column",
  },
  image: {
    height: 60,
    width: 60,
    border: "1px solid lightblue",
    borderRadius: 5,
    objectFit: "cover",
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
