import React from "react";
import axios from "axios";
import animalURL from "../utils/animalURL";
import AnimalTypes from "../constants/AnimalTypes";

export default class AnimalCreator extends React.Component {
  constructor(props) {
    super(props);

    const { currentAnimal } = props;

    this.state = {
      animalName: currentAnimal?.name || "",
      animalType: currentAnimal?.type || Object.keys(AnimalTypes)[0].type,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { animalName, animalType } = this.state;
    const payload = { name: animalName, type: animalType };

    console.log("payload:", payload);

    // Check that name is not empty
    if (animalName.length > 0) {
      axios.post(animalURL, payload).then((res) => {
        this.props.getAnimals();
      });
    }
  };

  renderAnimalTypeOptions = () => {
    let res = [];

    for (let animalType in AnimalTypes) {
      res.push(
        <option value={animalType} key={animalType}>
          {AnimalTypes[animalType].name}
        </option>
      );
    }

    return res;
  };

  render = () => {
    const { animalName, animalType } = this.state;

    return (
      <div style={styles.animalCreator}>
        <form style={styles.form} onSubmit={this.handleSubmit}>
          <img
            src={AnimalTypes[animalType].imageURL}
            style={{ ...styles.image, ...styles.centerItems }}
          />
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
    height: 150,
    width: 150,
    objectFit: "cover",
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
