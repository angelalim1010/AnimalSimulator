import React from "react";
import AnimalTypes from "../constants/AnimalTypes";

class AnimalCreator extends React.Component {
  constructor(props) {
    super(props);

    const { currentAnimal } = props;

    this.state = {
      animalName: currentAnimal?.name || "",
      animalType: currentAnimal?.type || Object.keys(AnimalTypes)[0],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add axios POST request
  };

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
    const { animalName, animalType } = this.state;

    return (
      <div style={styles.animalCreator}>
        <form
          style={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div style={{ ...styles.image, ...styles.centerItems }}>
            {AnimalTypes[animalType]} Image
          </div>
          <input
            name="animalName"
            style={styles.input}
            value={animalName}
            onChange={this.handleChange}
          />
          <select
            name="animalType"
            style={styles.select}
            value={animalType}
            onChange={this.handleChange}
          >
            {this.renderAnimalTypeOptions()}
          </select>
          <button style={styles.saveButton} type="submit">
            Save
          </button>
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
