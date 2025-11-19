"use-client";
import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Container,
  IconButton,
  Snackbar,
  Alert,
  Grid2,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ReCAPTCHA from "react-google-recaptcha";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Add honeypot field
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Initialize honeypot
  });

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const [isVerified, setIsVerified] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      console.log("RECAPTCHA_SITE_KEY is not set");
    }
    if (!isVerified) {
      setSnackbar({
        open: true,
        message: "Please verify CAPTCHA before sending a message",
        severity: "error",
      });
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", message: "", honeypot: "" }); // Clear honeypot as well
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.message || "Failed to send message.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbar({
        open: true,
        message: "An error occurred while sending the message.",
        severity: "error",
      });
    }
  };

  const handleEmailClick = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      setSnackbar({
        open: true,
        message: "Please verify CAPTCHA before sending an email",
        severity: "error",
      });
    } else {
      const email = atob(process.env.NEXT_PUBLIC_ENCODED_EMAIL!);
      window.location.href = `mailto:${email}`;
    }
  };

  const handleRecaptchaChange = async (token: string | null) => {
    if (token) {
      setIsVerified(true);
    }
  };

  return (
    <>
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
                {/* Honeypot field */}
                <Grid2 size={{ xs: 12 }} sx={{ display: 'none' }}>
                  <TextField
                    fullWidth
                    label="Leave this field empty"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
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

            {!isVerified && (
              <Box sx={{ mt: 4 }}>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={handleRecaptchaChange}
                />
              </Box>
            )}

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <IconButton
                  href="https://github.com/tstinebaugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  aria-label="GitHub profile"
                >                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                  href="https://www.linkedin.com/in/travisstinebaugh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  aria-label="LinkedIn profile"
                >                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton size="large" onClick={handleEmailClick} aria-label="Send email">
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </motion.div>
        </Container>
      </Box>

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
    </>
  );
};

