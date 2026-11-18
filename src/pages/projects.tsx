import {
  Typography,
  Box,
  Grid2,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Head from "next/head";
import Image from "next/image";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title key="title">Projects - Travis Stinebaugh</title>
        <meta
          key="description"
          name="description"
          content="Featured projects by Travis Stinebaugh: a production SaaS app, open-source AI tooling, browser extensions, and backend services."
        />
      </Head>
      <Container>
        <div>
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
                Production SaaS, open-source AI tooling, browser extensions, and backend systems,
                built with a focus on performance, security, and clean architecture.
              </Typography>
            </Box>

            <Grid2 container spacing={3.5}>
              {projects.map((project, index) => (
                <Grid2 size={{ xs: 12, md: 6 }} key={project.title}>
                  <div style={{ height: "100%" }}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#111827",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 3,
                        overflow: "hidden",
                        transition: "border-color 0.15s ease-out",
                        "@media (hover: hover)": {
                          "&:hover": { borderColor: "rgba(99, 102, 241, 0.4)" },
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
                        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                          <Image
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            sizes="(max-width: 900px) 100vw, 560px"
                            priority={index < 2}
                            style={{ objectFit: "contain", borderRadius: "6px" }}
                          />
                        </Box>
                      </Box>
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          flexWrap="wrap"
                          gap={1}
                          sx={{ mb: 1.5 }}
                        >
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                              fontWeight: 700,
                              letterSpacing: "-0.01em",
                              fontSize: "1.25rem",
                            }}
                          >
                            {project.title}
                          </Typography>
                          {project.status && (
                            <Chip
                              label={project.status}
                              size="small"
                              sx={{
                                fontWeight: 600,
                                fontSize: "0.72rem",
                                backgroundColor: "rgba(16, 185, 129, 0.12)",
                                color: "#34d399",
                                border: "1px solid rgba(16, 185, 129, 0.35)",
                              }}
                            />
                          )}
                        </Stack>
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
                      <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1, flexWrap: "wrap" }}>
                        {project.githubUrl && (
                          <Button
                            size="small"
                            variant={project.liveUrl ? "outlined" : "contained"}
                            startIcon={<GitHubIcon />}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.githubLabel ?? "Source code"} for ${project.title} on GitHub`}
                          >
                            {project.githubLabel ?? "Source Code"}
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
                            aria-label={`Live site for ${project.title}`}
                          >
                            Live Site
                          </Button>
                        )}
                        {project.privateRepo && !project.githubUrl && (
                          <Chip
                            icon={<LockOutlinedIcon sx={{ fontSize: 16 }} />}
                            label="Private repo"
                            size="small"
                            sx={{ height: 30, px: 0.5, color: "text.secondary" }}
                          />
                        )}
                      </CardActions>
                    </Card>
                  </div>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </div>
      </Container>
    </>
  );
}
