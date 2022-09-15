import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import logo from src/assets/acerca-partner-logo.png;
import AcercaPartnerLogo from "../assets/AcercaPartnerLogo.png";
// import logo component from mui

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={AcercaPartnerLogo} alt="Acerca Partner Logo" />
          </Box>
        </Toolbar>
      </AppBar>
      <section className="App-content">
        <Box
          sx={{
            minHeight: 400,
            height: "calc(80vh - var(--navbarHeight))",
            width: "80%",
          }}
        >
          {children}
        </Box>
      </section>
    </div>
  );
};
export default MainLayout;
