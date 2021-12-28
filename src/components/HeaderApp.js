import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { createTheme } from "@mui/material/styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartMenu } from "./CartMenu";


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
    marginBottom: "0"
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

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <CartMenu item={"Perfil"}/>
      <CartMenu item={"Que se yo"}/>
      <CartMenu item={"Otra cosa"}/>
    </Menu>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <ElevationScroll {...props}>
          <AppBar theme={theme}>
            <Toolbar className={classes.appBar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2 }}
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

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <Toolbar />
      {renderMenu}
    </React.Fragment>
  );
}
