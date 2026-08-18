import {
  Typography,
  Box,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Head from "next/head";

import { projects } from "../data/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Travis Stinebaugh</title>
        <meta
          name="description"
          content="Featured projects by Travis Stinebaugh: full-stack applications, native browser extensions, distributed services, and developer tooling."
        />
      </Head>
      <Container>
        <motion.div initial="hidden" animate="show" variants={container}>
          <Box sx={{ py: { xs: 3, md: 5 } }}>
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  mb: 1.5,
                }}
              >
                Featured Projects
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: "650px", fontSize: "1.05rem" }}
              >
                A collection of full-stack web applications, native browser extensions,
                and backend systems engineered with a focus on performance, security, and clean architecture.
              </Typography>
            </Box>

            <Grid2 container spacing={3.5}>
              {projects.map((project, index) => (
                <Grid2 size={{ xs: 12, md: 6 }} key={index}>
                  <motion.div variants={item} style={{ height: "100%" }}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#111827",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 3,
                        overflow: "hidden",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: "rgba(99, 102, 241, 0.35)",
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.45)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: 190, sm: 230 },
                          backgroundColor: "#090d16",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1.5,
                          position: "relative",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: "6px",
                          }}
                          image={project.image}
                          alt={project.title}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            mb: 1.5,
                            fontSize: "1.25rem",
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2.5, lineHeight: 1.65, fontSize: "0.9rem" }}
                        >
                          {project.description}
                        </Typography>
                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          gap={0.75}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                fontSize: "0.75rem",
                                height: "24px",
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                      <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1 }}>
                        {project.githubUrl && (
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Source Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<LaunchIcon />}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </Button>
                        )}
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
