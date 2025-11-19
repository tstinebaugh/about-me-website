import {
  Typography,
  Box,
  Container,
  Grid2,
  Button,
} from "@mui/material";

import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import { resumeData } from "../data/resume"; // Import the resume data

// Import the new resume sections
import ExperienceSection from "../components/resume/ExperienceSection";
import EducationSection from "../components/resume/EducationSection";
import SkillsSection from "../components/resume/SkillsSection";
import CertificationsSection from "../components/resume/CertificationsSection";

export default function Resume() {
  return (
    <Container>
      <motion.div initial="hidden" animate="show" variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}>
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
              href="/resume.pdf"
              target="_blank"
            >
              Download PDF
            </Button>
          </Box>

          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 8 }}>
              <ExperienceSection workExperience={resumeData.workExperience} />
              <EducationSection education={resumeData.education} />
            </Grid2>

            <Grid2 size={{ xs: 4, md: 3 }}>
              <SkillsSection
                technicalSkills={resumeData.technicalSkills}
                softSkills={resumeData.softSkills}
                languages={resumeData.languages}
              />
              <CertificationsSection certifications={resumeData.certifications} />
            </Grid2>
          </Grid2>
        </Box>
      </motion.div>
    </Container>
  );
}
