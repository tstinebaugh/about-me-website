import { Typography, Box, Grid2, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <Container>
      <motion.div initial="initial" animate="animate" variants={fadeIn}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Me
          </Typography>

          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Background
                </Typography>
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  My passion for technology began early, building my first
                  computer at age six. After earning a Bachelor of Science in
                  Computer Science and Systems from the University of
                  Washington, I&apos;ve pursued a dynamic career as a Software
                  Engineer, Test Engineer, and AI Prompt Engineer. I&apos;m
                  driven by a commitment to innovative problem-solving,
                  continuous learning, and creating software solutions that make
                  a meaningful impact. My technical expertise is matched by my
                  enthusiasm for emerging technologies and collaborative
                  development.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Education
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  University of Washington
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  B.S. Computer Science and Systems • 2013 - 2017
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Chinese University of Hong Kong
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Semester Abroad • 2016
                </Typography>
              </Paper>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <Grid2 container spacing={2}>
                  {[
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Python",
                    "Golang",
                    "SQL",
                    "PostgreSQL",
                    "Next.js",
                    "AWS",
                    "CI/CD",
                    "git",
                    "bash/shell",
                    "Kubernetes/Docker",
                    "Test-Driven Design & Development",
                    "Infrastructure as code (IAC)",
                  ].map((skill) => (
                    <Grid2 key={skill}>
                      <Paper sx={{ p: 1, bgcolor: "primary.main" }}>
                        <Typography>{skill}</Typography>
                      </Paper>
                    </Grid2>
                  ))}
                </Grid2>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Interests
                </Typography>
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  Outside of software engineering, I enjoy traveling, connecting
                  with nature via hiking, camping, and off-roading, building
                  meaningful connections with friends and family, and
                  challenging myself to grow and try new things. I&apos;m
                  currently studying three languages.
                </Typography>
              </Paper>
            </Grid2>
          </Grid2>
        </Box>
      </motion.div>
    </Container>
  );
}
