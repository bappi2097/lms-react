import classes from "./style.module.scss";
import Container from "../../common/Container";
import { Grid, Typography } from "@mui/material";
import CategoryCard from "../../common/CategoryCard";
const Category = () => {
  return (
    <Grid container component={Container} rowSpacing={3}>
      <Grid item component="header" className={classes.courseHeader}>
        <Typography component="h1">
          Course <span>Category</span>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          {[...Array(10)].map((x, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <CategoryCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Category;
