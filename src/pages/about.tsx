import { Typography, Box, Grid2, Container, Paper, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Head from "next/head";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const cardSx = {
  p: { xs: 2.5, sm: 3.5 },
  backgroundColor: "#111827",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: 3,
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - Travis Stinebaugh</title>
        <meta
          name="description"
          content="Learn more about Travis Stinebaugh, his background in computer science, software engineering career, and technical expertise."
        />
      </Head>
      <Container>
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
          <Box sx={{ py: { xs: 3, md: 5 } }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  mb: 1,
                }}
              >
                About Me
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Background, engineering philosophy, and continuous learning.
              </Typography>
            </Box>

            <Grid2 container spacing={3.5}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Paper sx={{ ...cardSx, mb: 3.5 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Background & Journey
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    Originally from the United States and currently living in Fukuoka, Japan (with
                    full local work authorization), my passion for technology began early, building my
                    first computer at age six. After earning a Bachelor of Science in Computer Science
                    and Systems from the University of Washington, I&apos;ve pursued a dynamic career
                    across high-scale distributed backend systems, cloud infrastructure, and modern web applications.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    I am driven by a commitment to innovative problem-solving, clean architecture,
                    continuous learning, and building resilient software solutions that make a
                    meaningful, high-leverage impact.
                  </Typography>
                </Paper>

                <Paper sx={cardSx}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Education
                  </Typography>
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      University of Washington
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      B.S. Computer Science & Systems • 2013 – 2017
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Chinese University of Hong Kong
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Semester Abroad • 2016
                    </Typography>
                  </Box>
                </Paper>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <Paper sx={{ ...cardSx, mb: 3.5 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Technical Toolkit
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {[
                      "Golang",
                      "TypeScript",
                      "Python",
                      "React / Next.js",
                      "PostgreSQL",
                      "Redis",
                      "AWS (Lambda, S3, RDS)",
                      "Docker & Kubernetes",
                      "CI/CD Pipelines",
                      "Pulumi (IaC)",
                      "Cursor",
                      "Claude Code",
                      "Antigravity",
                      "Test-Driven Development (TDD)",
                      "GraphQL & REST APIs",
                      "Microservices Architecture",
                      "Git & Linux Shell",
                    ].map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          fontSize: "0.825rem",
                          py: 0.5,
                          backgroundColor: "rgba(99, 102, 241, 0.08)",
                          border: "1px solid rgba(99, 102, 241, 0.2)",
                          color: "#c7d2fe",
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>

                <Paper sx={cardSx}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Beyond Engineering
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Outside of software engineering, I enjoy traveling, connecting with nature
                    through hiking, camping, and exploring the outdoors. I value deep conversations
                    and meaningful connections with friends and family, and challenge myself
                    continually through multilingual study (currently studying Japanese toward JLPT N3).
                  </Typography>
                </Paper>
              </Grid2>
            </Grid2>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
