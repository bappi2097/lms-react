import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box, IconButton } from "@mui/material";
import ClockIcon from "@mui/icons-material/AccessTime";
import SectionIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from "@mui/icons-material/StarOutline";
import CartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles({
  cardRoot: {
    padding: 6,
  },
  cardMediaImg: {
    borderRadius: 6,
  },
  avatar: {
    borderRadius: "50%",
    height: 35,
    width: 35,
    border: "1px solid white",
    "&:hover": {
      border: "1px solid blue",
    },
  },
  tag: {
    background: "rgba(0, 178, 45, 0.1)",
    borderRadius: "4px",
    color: "#4AD567",
    padding: "2px 4px",
  },
});

const CourseCard = () => {
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.cardRoot }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        classes={{ img: classes.cardMediaImg }}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" columnGap={1} alignItems="center">
            <CardMedia
              component="img"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              classes={{ img: classes.avatar }}
            />
            <Typography>Jane Doe</Typography>
          </Box>
          <span className={classes.tag}>Development</span>
        </Box>
        <Typography my={1}>Web Development Full Course</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            display="flex"
            columnGap={1}
            alignItems="center"
            flexWrap="nowrap"
          >
            <ClockIcon />
            <Typography noWrap>8 Hour</Typography>
          </Box>
          <Box
            display="flex"
            columnGap={1}
            alignItems="center"
            flexWrap="nowrap"
          >
            <SectionIcon />
            <Typography noWrap>31 Lessons</Typography>
          </Box>
          <Box
            display="flex"
            columnGap={1}
            alignItems="center"
            flexWrap="nowrap"
          >
            <StarIcon />
            <Typography noWrap>4.3</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          className={classes.tag}
        >
          <Box display="flex" columnGap={1}>
            <Typography>৳ ২৯৯</Typography>
            <Typography
              color="black"
              style={{ textDecoration: "line-through" }}
            >
              ৳ ৫০০
            </Typography>
          </Box>
          <IconButton>
            <CartIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
export default CourseCard;
