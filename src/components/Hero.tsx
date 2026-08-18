import { Typography, Box, Button, Stack, Chip } from "@mui/material";
import { Grid2 } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../public/profile_alaska.jpeg";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Hero = () => {
  return (
    <motion.div variants={fadeIn} initial="initial" animate="animate">
      <Box
        sx={{
          py: { xs: 4, md: 8 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid2 container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box>
              <Chip
                label="Senior Full Stack & Backend Engineer"
                size="small"
                sx={{
                  mb: 2.5,
                  px: 1,
                  py: 0.5,
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  backgroundColor: "rgba(99, 102, 241, 0.12)",
                  color: "#818cf8",
                  border: "1px solid rgba(99, 102, 241, 0.28)",
                }}
              />

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                Hi, I&apos;m{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Travis Stinebaugh
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  color: "text.secondary",
                  mb: 3.5,
                  maxWidth: "580px",
                  lineHeight: 1.7,
                }}
              >
                I specialize in architecting scalable backend microservices, high-throughput data
                pipelines, and responsive full-stack web applications with Golang, TypeScript,
                Python, React/Next.js, and AWS.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
              >
                <Link href="/projects" passHref style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ px: 3, py: 1.25 }}
                  >
                    View Projects
                  </Button>
                </Link>

                <Link href="/resume" passHref style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DescriptionOutlinedIcon />}
                    sx={{ px: 3, py: 1.25 }}
                  >
                    Resume & Experience
                  </Button>
                </Link>

                <Button
                  variant="text"
                  size="large"
                  href="#contact"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.05)" },
                  }}
                >
                  Get in Touch
                </Button>
              </Stack>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                maxWidth: "420px",
                mx: "auto",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "-8px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(192, 132, 252, 0.15) 100%)",
                  zIndex: 0,
                  filter: "blur(12px)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  backgroundColor: "#111827",
                }}
              >
                <Image
                  src={hero}
                  alt="Travis Stinebaugh"
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </motion.div>
  );
};
