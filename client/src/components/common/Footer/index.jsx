import { Box, Typography } from "@mui/material";
import classes from "./style.module.scss";
import {
  GrLinkedinOption,
  GrFacebookOption,
  GrInstagram,
  GrYoutube,
} from "react-icons/all";

const Footer = () => {
  return (
    <Box component="footer" className={classes.footer}>
      <div className={classes.footerLink}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={classes.footerIconLink}>
        <ul>
          <li>
            <a href="#">
              <GrFacebookOption />
            </a>
          </li>
          <li>
            <a href="#">
              <GrInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <GrYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <GrLinkedinOption />
            </a>
          </li>
        </ul>
      </div>
      <Typography
        sx={{
          textAlign: "center",
          width: { sm: "100%", md: 400, lg: 500, xl: 600 },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
        malesuada pulvinar nibh at sit risus dictum sem cursus.
      </Typography>
    </Box>
  );
};

export default Footer;
