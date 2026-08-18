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
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ReCAPTCHA from "react-google-recaptcha";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
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
    honeypot: "",
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
        setFormData({ name: "", email: "", message: "", honeypot: "" });
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
      <Box id="contact" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Paper
              sx={{
                p: { xs: 3, sm: 5 },
                backgroundColor: "#111827",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  mb: 1,
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Have a project in mind, an engineering opportunity, or just want to connect?
              </Typography>

              <Box component="form" onSubmit={handleFormSubmit}>
                <Grid2 container spacing={2.5}>
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
                  <Grid2 size={{ xs: 12 }} sx={{ display: "none" }}>
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
                      sx={{ py: 1.25, fontWeight: 600 }}
                    >
                      Send Message
                    </Button>
                  </Grid2>
                </Grid2>
              </Box>

              {!isVerified && (
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={handleRecaptchaChange}
                  />
                </Box>
              )}

              <Box
                sx={{
                  mt: 4,
                  pt: 3,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <IconButton
                  href="https://github.com/tstinebaugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  aria-label="GitHub profile"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/travisstinebaugh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  aria-label="LinkedIn profile"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  size="large"
                  onClick={handleEmailClick}
                  aria-label="Send email"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Paper>
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

