import { Box } from "@mui/material";

const Container = (props) => {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: "1em", md: "7em", lg: "10em" },
        justifyContent: "center",
        marginBottom: "1em",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Container;
