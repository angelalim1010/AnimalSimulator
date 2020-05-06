import React from "react";
import AnimalTypes from "../constants/AnimalTypes";

class AnimalCreator extends React.Component {
  renderAnimalTypeOptions = () => {
    let res = [];

    for (let animalType in AnimalTypes) {
      res.push(
        <option value={animalType} key={animalType}>
          {AnimalTypes[animalType]}
        </option>
      );
    }

    return res;
  };

  render = () => {
    return (
      <div style={styles.animalCreator}>
        <form style={styles.form} noValidate autoComplete="off">
          <div style={{ ...styles.image, ...styles.centerItems }}>
            Image Here
          </div>
          <input
            style={styles.input}
            placeholder="Enter name..." // TODO: Make this the current animal's name
          />
          <select style={styles.select}>
            {this.renderAnimalTypeOptions()}
          </select>
          <button style={styles.saveButton}>Save</button>
        </form>
      </div>
    );
  };
}

export default AnimalCreator;

const styles = {
  animalCreator: {
    padding: "50px 60px",
    boxShadow: "0px 0px 8px 4px #888888",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: 150,
  },
  image: {
    border: "1px solid black",
    borderRadius: 5,
    height: 150,
    width: 150,
  },
  input: {
    height: 21,
    textAlign: "center",
    marginTop: 25,
  },
  select: {
    height: 25,
    marginTop: 25,
  },
  saveButton: {
    height: 25,
    marginTop: 25,
    backgroundColor: "#90EE90", // lightgreen
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
