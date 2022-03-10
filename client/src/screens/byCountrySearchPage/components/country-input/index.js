import { useState } from "react";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./country-input.css";

const CountryInput = ({ findCountry, countries }) => {
  const [input, setInput] = useState("");

  return (
    <div className="country-page-country-input">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-standard-label">
          Choose country
        </InputLabel>
        <Select
          onChange={(event) => setInput(event.target.value)}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Choose country"
          defaultValue=""
        >
          {countries
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
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          if (input !== "") {
            findCountry(input);
          }
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default CountryInput;
