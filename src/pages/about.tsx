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
                  [Your background story here] Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Education
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  University Name
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Degree • Year - Year
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
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Python",
                    "SQL",
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
                  [Your interests and hobbies] Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>
              </Paper>
            </Grid2>
          </Grid2>
        </Box>
      </motion.div>
    </Container>
  );
}
