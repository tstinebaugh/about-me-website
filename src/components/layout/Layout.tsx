import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Navbar />
      <Container component="main" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          backgroundColor: "rgba(17, 24, 39, 0.6)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Travis Stinebaugh. Built with Next.js, TypeScript & MUI.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://github.com/tstinebaugh"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label="GitHub profile"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.06)" },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/travisstinebaugh/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label="LinkedIn profile"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.06)" },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

