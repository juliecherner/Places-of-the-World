import { useState, useEffect, useReducer } from "react";
import Api from "../../api/Api";
import { Input, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./new-comment.css";

const initialState = {
  user: "",
  rate: "",
  text: "",
};

const reducer = (state, action) => {
  switch (action.name) {
    case "user":
      return { ...state, [action.name]: action.payload };
    case "rate":
      return { ...state, [action.name]: action.payload };
    case "text":
      return { ...state, [action.name]: action.payload };
    default:
      return state;
  }
};

const NewComment = ({ placeId, setComments, comments }) => {
  const [inputFields, dispatcher] = useReducer(reducer, initialState);

  const handleInput = ({ target: { value, name } }) => {
    const action = { name: name, payload: value };
    dispatcher(action);
  };

  const constants = [
    { placeholder: "Enter your name", name: "user" },
    { placeholder: "Add description", name: "text" },
  ];

  const addPlace = async () => {
    const comment = { ...inputFields, placeId: placeId };
    try {
      const { data: newComment } = await Api.post("api/comment", comment);
      const newComments = [...comments];
      newComments.push(newComment);
      setComments(newComments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-comment">
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
          Rate the place
        </InputLabel>

        <Select
          name="rate"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Choose country"
          onChange={handleInput}
          value={inputFields["rate"]}
        >
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <MenuItem value={item} key={item}>
                {item}
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
          dispatcher({ name: "user", payload: "" });
          dispatcher({ name: "rate", payload: "" });
          dispatcher({ name: "text", payload: "" });
          addPlace(inputFields);
        }}
      >
        Add comment
      </Button>
    </div>
  );
};

export default NewComment;
