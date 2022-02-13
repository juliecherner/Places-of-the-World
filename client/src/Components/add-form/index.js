import { useState, useEffect, useReducer } from "react";
import Api from "../../api/Api";
import { Input, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./add-form.css";

const initialState = {
  imgURL: "",
  country: "",
  subLocation: "",
  description: "",
  place: "",
};

const reducer = (state, action) => {
  switch (action.name) {
    case "place":
      return { ...state, [action.name]: action.payload };
    case "imgURL":
      return { ...state, [action.name]: action.payload };
    case "description":
      return { ...state, [action.name]: action.payload };
    case "subLocation":
      return { ...state, [action.name]: action.payload };
    case "country":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};
//code repeats :(
const AddForm = () => {
  const [allCountries, setAllCountries] = useState([]);

  const [inputFields, dispatcher] = useReducer(reducer, initialState);

  const getAll = async () => {
    const { data } = await Api.get("api/country");
    const countriesNames = data.map((item) => item.country);

    setAllCountries(countriesNames);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleInput = ({ target: { value, name } }) => {
    const action = { name: name, payload: value };

    dispatcher(action);
  };

  const constants = [
    { placeholder: "Enter place name", name: "place" },
    { placeholder: "Enter place description", name: "description" },
    { placeholder: "Enter link to valid image", name: "imgURL" },
    { placeholder: "Enter location in country", name: "subLocation" },
  ];

  const addPlace = async (inputFields) => {
    try {
      const newPlace = await Api.post("api/places/", inputFields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-place-add-form">
      {constants.map((attr) => {
        const { name } = attr;
        return (
          <Input
            onChange={handleInput}
            value={inputFields[name]}
            key={name}
            {...attr}
            color="secondary"
            fullWidth
          />
        );
      })}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-standard-label">
          Choose country
        </InputLabel>

        <Select
          name="country"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Choose country"
          onChange={handleInput}
          value={inputFields["country"]}
        >
          {allCountries
            .sort((a, b) => a.localeCompare(b))
            .map((country) => {
              return (
                <MenuItem value={country} key={country}>
                  {country}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <div>All fields are required</div>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          if (checkIfNotEmpty(inputFields)) {
            dispatcher({ name: "imgURL", payload: "" });
            dispatcher({ name: "country", payload: "" });
            dispatcher({ name: "subLocation", payload: "" });
            dispatcher({ name: "description", payload: "" });
            dispatcher({ name: "place", payload: "" });
            addPlace(inputFields);
          }
        }}
      >
        Add place
      </Button>
    </div>
  );
};

const checkIfNotEmpty = (state) => {
  const objectValues = Object.values(state);
  return objectValues.some((item) => item !== "");
};

export default AddForm;
