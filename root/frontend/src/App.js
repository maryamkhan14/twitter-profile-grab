import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box
        width="80%"
        height="80vh"
        className="App"
        display="flex"
        flexDirection="column"
        justifySelf="center"
        justifyContent="center"
        p={5}
        sx={{ backgroundColor: "primary.main" }}
      >
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Box>
    </BrowserRouter>
  );
}

export default App;
