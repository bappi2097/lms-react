import { Box, Grid, Typography } from "@mui/material";
import Container from "../../common/Container";
import CourseCard from "../../common/CourseCard";
import classes from "./style.module.scss";
const Courses = () => {
  return (
    <Grid container component={Container} rowSpacing={3}>
      <Grid item component="header" className={classes.courseHeader}>
        <Typography>Here is Our</Typography>
        <Typography component="h1">Top Courses</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ marginLeft: 0 }}
        >
          {[...Array(10)].map((x, i) => (
            <Grid key={i} item>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Courses;
