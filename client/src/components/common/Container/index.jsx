import { Box } from "@mui/material";

const Container = (props) => {
  return (
    <Box
      component="section"
      sx={{
        mx: { xs: "1em", md: "5em", lg: "7em" },
        justifyContent: "center",
        my: "1em",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Container;
