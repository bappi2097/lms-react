import { Grid } from "@mui/material";
import CourseCard from "../../components/common/CourseCard";

const CourseCategory = () => {
  return (
    <Grid container spacing={2} sx={{ py: 2 }}>
      {[...Array(10)].map((x, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <CourseCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseCategory;
