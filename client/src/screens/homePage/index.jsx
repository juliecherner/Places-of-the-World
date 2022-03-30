import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-title">All World Places.</div>
      <Link to="all">
        <div className="home-page--button">
          FIND <DoubleArrowIcon />
        </div>
      </Link>
      <div className="home-page-place">
        <Link to="places/61fd0a20be348f4769df96f2">
          <span>Salar de Uyuni, Bolivia</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
