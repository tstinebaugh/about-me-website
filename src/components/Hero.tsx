import { Typography, Box, Button, Stack } from "@mui/material";
import { Grid2 } from "@mui/material";
import Image from "next/image";
import hero from "../../public/profile_alaska.jpeg";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const Hero = () => {
  return (
    <div>
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
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2.5,
                  px: 1.5,
                  py: 0.625,
                  borderRadius: "999px",
                  fontSize: "0.825rem",
                  fontWeight: 600,
                  lineHeight: 1.4,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  color: "#6ee7b7",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <Box
                  component="span"
                  aria-hidden
                  sx={{
                    width: 8,
                    height: 8,
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: "#34d399",
                    boxShadow: "0 0 0 3px rgba(52, 211, 153, 0.2)",
                  }}
                />
                Open to new roles · Available January 2027
              </Box>

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
                component="p"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 1.5,
                }}
              >
                Senior Full Stack & Backend Engineer
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
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 3, py: 1.25 }}
                >
                  View Projects
                </Button>

                <Button
                  component={Link}
                  href="/resume"
                  variant="outlined"
                  size="large"
                  startIcon={<DescriptionOutlinedIcon />}
                  sx={{ px: 3, py: 1.25 }}
                >
                  Resume & Experience
                </Button>

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
                maxWidth: "420px",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                  backgroundColor: "#111827",
                }}
              >
                <Image
                  src={hero}
                  alt="Travis Stinebaugh"
                  priority
                  sizes="(max-width: 900px) 90vw, 420px"
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
    </div>
  );
};
