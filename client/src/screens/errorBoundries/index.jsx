import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./error.css";

const Error = () => {
  return (
    <div className="error-page">
      <span>Sorry, the page is not found</span>
      <br />
      <div className="error-page--link-home">
        <Button variant="contained" color="success">
          <Link to="/">Return to home page</Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
