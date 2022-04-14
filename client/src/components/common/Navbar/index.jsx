import { Grid } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./style.module.scss";

const Navbar = () => {
  const location = useLocation();
  return (
    <Grid
      container
      component="nav"
      className={classes.navBar}
      sx={{
        px: { xs: "1rem", md: "2.5rem", lg: "5rem" },
        py: { xs: "1.25rem" },
        borderBottom:
          location.pathname === "/" ? "" : "1px solid rgba(0, 0, 0, 0.12)",
        backgroundColor:
          location.pathname === "/"
            ? "rgba(74, 213, 103, 0.06)"
            : "rgba(255, 255, 255, 1)",
      }}
    >
      <Grid item className={classes.logo}>
        <span>Logo</span>
      </Grid>
      <Grid
        item
        className={classes.linkContainer}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Grid container component="ul">
          <Grid item component="li">
            <NavLink to="/">Home</NavLink>
          </Grid>
          <Grid item component="li">
            <NavLink to="/courses">Courses</NavLink>
          </Grid>
          <Grid item component="li">
            <NavLink to="/categories">Category</NavLink>
          </Grid>
          <Grid item component="li">
            <NavLink className={classes.login} to="/login">
              Login
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
