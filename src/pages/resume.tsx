import {
  Typography,
  Box,
  Container,
  Grid2,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import Head from "next/head";
import { resumeData } from "../data/resume";

import ExperienceSection from "../components/resume/ExperienceSection";
import EducationSection from "../components/resume/EducationSection";
import SkillsSection from "../components/resume/SkillsSection";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Travis Stinebaugh</title>
        <meta
          name="description"
          content="Resume and professional experience of Travis Stinebaugh, Senior Full Stack & Backend Engineer."
        />
      </Head>
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <Box sx={{ py: { xs: 3, md: 5 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2,
                mb: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                    mb: 0.5,
                  }}
                >
                  Resume & Experience
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Track record of building high-scale distributed systems and web applications.
                </Typography>
              </Box>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                target="_blank"
                sx={{ px: 2.5, py: 1 }}
              >
                Download PDF
              </Button>
            </Box>

            <Grid2 container spacing={3.5}>
              <Grid2 size={{ xs: 12, md: 8 }}>
                {resumeData.summary && (
                  <Box
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      mb: 3.5,
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 3,
                      borderLeft: "4px solid #6366f1",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "0.95rem" }}
                    >
                      {resumeData.summary}
                    </Typography>
                  </Box>
                )}
                <ExperienceSection workExperience={resumeData.workExperience} />
                <EducationSection education={resumeData.education} />
              </Grid2>

              <Grid2 size={{ xs: 12, md: 4 }}>
                <SkillsSection
                  allSkillCategories={resumeData.allSkillCategories}
                  technicalSkills={resumeData.technicalSkills}
                  languages={resumeData.languages}
                />
              </Grid2>
            </Grid2>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
