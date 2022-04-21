import { Box, Button, Typography } from "@mui/material";
import classes from "./style.module.scss";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: { xs: "none", sm: "url('src/assets/header.svg')" },
        backgroundSize: { sm: "300px", md: "400px" },
      }}
      className={classes.header}
    >
      <Box
        sx={{
          mx: {
            xs: "auto",
            sm: "1em",
            md: "2.5em",
            lg: "10em",
            xl: "15em",
          },
          my: "1.5em",
        }}
        className={classes.headerBody}
      >
        <span className={classes.subtitle}>An Open Platform For</span>
        <span className={classes.title}>
          Everyone
          <br /> To <span>Learn</span> And <span>Examine Thyself</span>
        </span>
        <div className={classes.search}>
          <input type="text" placeholder="Search Course" />
          <Button variant="contained">Search</Button>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
