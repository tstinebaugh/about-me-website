import {
  Typography,
  Box,
  Container,
  Paper,
  Grid2,
  Button,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Resume() {
  return (
    <Container>
      <motion.div initial="initial" animate="animate" variants={fadeIn}>
        <Box sx={{ py: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h3" component="h1">
              Resume
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/your-resume.pdf"
              target="_blank"
            >
              Download PDF
            </Button>
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Work Experience
                </Typography>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">Company Name</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        Position • Year - Present
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        • Achievement 1
                        <br />• Achievement 2
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {/* Add more work experience items */}
                </Timeline>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Education
                </Typography>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">University Name</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        Degree • Year - Year
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Relevant coursework and achievements
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {/* Add more education items */}
                </Timeline>
              </Paper>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Technical Skills
                </Typography>
                {/* Add your technical skills */}

                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                  Soft Skills
                </Typography>
                {/* Add your soft skills */}
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Certifications
                </Typography>
                {/* Add your certifications */}
              </Paper>
            </Grid2>
          </Grid2>
        </Box>
      </motion.div>
    </Container>
  );
}
