import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import AnimalTypes from "../constants/AnimalTypes";

const useStyles = (theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: 200,
  },
  saveButtonRoot: {
    backgroundColor: "#90EE90", // lightgreen
  },
});

class AnimalCreator extends React.Component {
  renderAnimalTypeMenuItems = () => {
    let res = [];

    for (let animalType in AnimalTypes) {
      res.push(
        <MenuItem value={animalType} key={animalType}>
          {AnimalTypes[animalType]}
        </MenuItem>
      );
    }

    return res;
  };

  render = () => {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            label="Animal Name"
            variant="outlined"
            placeholder="Betty" // TODO: Make this the current animal's name
          />
          <Select
            value={
              Object.keys(AnimalTypes)[0] // TODO: Make this the current animal's type
            }
            variant="outlined"
          >
            {this.renderAnimalTypeMenuItems()}
          </Select>
          <Button
            variant="contained"
            classes={{ root: classes.saveButtonRoot }}
          >
            Save
          </Button>
        </form>
      </div>
    );
  };
}

export default withStyles(useStyles)(AnimalCreator);
