import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { createTheme } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { RenderMenu } from "./ShoppingCart/RenderMenu";

// Styles
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const useStyle = makeStyles({
  appBar: {
    height: "100px",
    margin: "6%",
    marginTop: "0",
    marginBottom: "0",
  },
});

// Navbar scroll
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const HeaderApp = (props) => {
  const classes = useStyle();

  // Render cart menu
  const menuId = "primary-search-account-menu";

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar theme={theme}>
            <Toolbar className={classes.appBar}>
              <IconButton
                href="/"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <StorefrontIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                Mini E-Commerce
              </Typography>

              <ShoppingCart
                menuId={menuId}
                handleProfileMenuOpen={handleProfileMenuOpen}
              />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <Toolbar />
      <RenderMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </React.Fragment>
  );
};
