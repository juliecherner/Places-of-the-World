import { Link } from "react-router-dom";
import "./header.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-desktop">
          <Link className="header-item" to="/">
            Home
          </Link>
          <Link to="/all" className="header-item">
            All places to explore
          </Link>
          <Link to="/country" className="header-item">
            Find by country
          </Link>
        </div>

        <nav className="header--mobile">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  color="success"
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  <MenuIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <Link className="header-element" to="/">
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <Link className="header-element" to="/all">
                      Global Search
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <Link className="header-element" to="/country">
                      Search by country
                    </Link>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </nav>
      </div>
    </div>
  );
};

export default Header;
