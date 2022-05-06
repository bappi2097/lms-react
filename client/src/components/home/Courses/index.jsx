import { Box, Grid, Typography } from "@mui/material";
import Container from "../../common/Container";
import CourseCard from "../../common/CourseCard";
import classes from "./style.module.scss";
const Courses = () => {
  return (
    <Grid container component={Container}>
      <Grid item component="header" className={classes.courseHeader}>
        <Typography>Here is Our</Typography>
        <Typography component="h1">Top Courses</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          {[...Array(10)].map((x, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Courses;
