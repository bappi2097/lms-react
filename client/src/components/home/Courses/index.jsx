import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "../../common/CourseCard";
import classes from "./style.module.scss";
const Courses = () => {
  return (
    <Grid
      container
      component="section"
      className={classes.courseSection}
      rowSpacing={3}
    >
      <Grid item component="header" className={classes.courseHeader}>
        <Typography>Here is Our</Typography>
        <Typography component="h1">Top Courses</Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={3}>
          {[...Array(10)].map((x, i) => (
            <Grid key={i} item sx={{ mx: "auto" }}>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Courses;
