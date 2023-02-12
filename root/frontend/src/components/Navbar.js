import { Box, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <header>
      <Box className="navbarBox">
        <Typography variant="h3" pt={3}>
          Twitter Profile Grab
        </Typography>
      </Box>
    </header>
  );
};
export default Navbar;
