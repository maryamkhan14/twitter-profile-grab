import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
      </Box>
      <Box display="flex" flex="1 1 auto" p={4}>
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
