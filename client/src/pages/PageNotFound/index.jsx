import { Box, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      height="100vh"
    >
      <Typography variant="h3" height={60}>
        Page Not Found
      </Typography>
    </Box>
  );
};

export default PageNotFound;
