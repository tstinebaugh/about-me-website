import { useState } from "react";
import {
  Typography,
  Box,
  Grid2,
  Button,
  TextField,
  Container,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setSnackbar({
      open: true,
      message: "Message sent successfully!",
      severity: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <motion.div variants={fadeInUp}>
        <Box
          sx={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(45deg, #1a1a1a 30%, #2c2c2c 90%)",
          }}
        >
          <Container>
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h2" component="h1" gutterBottom>
                    Hi, I&apos;m Travis Stinebaugh!
                  </Typography>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                    I create beautiful, responsive web applications with modern
                    technologies.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="contained"
                      size="large"
                      href="#contact"
                      sx={{ mr: 2 }}
                    >
                      Contact Me
                    </Button>
                    <Button variant="outlined" size="large" href="#projects">
                      View Projects
                    </Button>
                  </Box>
                </motion.div>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                {/* Add your profile image or illustration here */}
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </motion.div>

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8, backgroundColor: "background.paper" }}>
        <Container maxWidth="md">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              Get In Touch
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 4 }}>
              <Grid2 container spacing={3}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid2>
              </Grid2>
            </Box>

            {/* Social Links */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <IconButton
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton href="mailto:your.email@example.com" size="large">
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
}
