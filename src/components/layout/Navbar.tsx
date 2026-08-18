import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        backgroundColor: "#0b0f19",
        color: "text.primary",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2,
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#ffffff",
            }}
          >
            TS
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Travis Stinebaugh
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "text.secondary" }}
          aria-label="close drawer"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mt: 2 }}>
        {navItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <ListItem
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              sx={{
                backgroundColor: isActive
                  ? "rgba(99, 102, 241, 0.12)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(99, 102, 241, 0.3)"
                  : "1px solid transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  cursor: "pointer",
                },
                my: 1,
                borderRadius: "8px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: isActive ? "#818cf8" : "text.primary",
                  "& .MuiListItemText-primary": {
                    fontWeight: isActive ? 600 : 500,
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(11, 15, 25, 0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 0, sm: 2 },
            py: 1,
          }}
        >
          {/* Logo & Brand Monogram */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#ffffff",
                boxShadow: "0 2px 8px rgba(99, 102, 241, 0.35)",
              }}
            >
              TS
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#f3f4f6",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Travis Stinebaugh
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: { xs: "none", sm: "block" },
                  fontSize: "0.75rem",
                }}
              >
                Senior Full Stack Engineer
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <Link
                  href={item.path}
                  key={item.path}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      backgroundColor: isActive
                        ? "rgba(99, 102, 241, 0.12)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(99, 102, 241, 0.3)"
                        : "1px solid transparent",
                      color: isActive ? "#818cf8" : "text.secondary",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        color: "#ffffff",
                      },
                      textTransform: "none",
                      fontSize: "0.925rem",
                      fontWeight: isActive ? 600 : 500,
                      px: 2.25,
                      py: 0.75,
                      borderRadius: "8px",
                      transition: "all 0.15s ease-in-out",
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Hamburger Menu Icon for Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              ml: "auto",
              color: "text.secondary",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "#0b0f19",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
