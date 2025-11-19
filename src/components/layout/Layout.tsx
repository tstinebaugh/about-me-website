import { Box, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "background.paper",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()} Travis Stinebaugh
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

