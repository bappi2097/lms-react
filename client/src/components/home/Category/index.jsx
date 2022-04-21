import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "../../common/CourseCard";
import classes from "./style.module.scss";
const Category = () => {
  return (
    <Grid
      container
      component="section"
      className={classes.courseSection}
      rowSpacing={3}
      sx={{ px: { md: "7em", lg: "10em" } }}
    >
      <Grid item component="header" className={classes.courseHeader}>
        <Typography component="h1">
          Course <span>Category</span>
        </Typography>
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

export default Category;
