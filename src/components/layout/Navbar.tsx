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
        width: 250,
        height: "100%",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "white" }}
          aria-label="close drawer"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            sx={{
              backgroundColor:
                router.pathname === item.path ? "#6366f1" : "transparent",
              "&:hover": {
                backgroundColor: "#6366f1",
                cursor: "pointer",
              },
              my: 1,
              mx: 2,
              borderRadius: "8px",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: router.pathname === item.path ? "#ffffff" : "#90caf9",
                "& .MuiListItemText-primary": {
                  fontSize: "1.1rem",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#1a1a1a",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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
          {/* Your Logo or Brand Name could go here */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    backgroundColor:
                      router.pathname === item.path ? "#6366f1" : "transparent",
                    color:
                      router.pathname === item.path ? "#ffffff" : "#90caf9",
                    "&:hover": {
                      backgroundColor: "#6366f1",
                      color: "#ffffff",
                    },
                    textTransform: "none",
                    fontSize: "1rem",
                    px: 3,
                    py: 1,
                    borderRadius: "8px",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
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
              color: "#90caf9",
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
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: "#1a1a1a",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
