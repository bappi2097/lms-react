import { Box, Typography } from "@mui/material";
import classes from "./style.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box component="footer" className={classes.footer}>
      <div>
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
      <div>
        <ul>
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <YouTubeIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
        malesuada pulvinar nibh at sit risus dictum sem cursus.
      </Typography>
    </Box>
  );
};

export default Footer;
