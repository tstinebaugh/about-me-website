import {
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { resumeSectionPaperSx } from "./resumeSectionStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { Education } from "../../data/resume";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <Paper sx={resumeSectionPaperSx}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Education & Certifications
      </Typography>
      <Timeline
        position="right"
        sx={{
          p: 0,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.4)",
                  my: 1.5,
                }}
              />
              {index < education.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pr: 0 }}>
              <Accordion
                elevation={0}
                disableGutters
                defaultExpanded={true}
                sx={{
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "8px !important",
                  mb: 1.5,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{ px: 2, py: 1 }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.05rem" }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                      {edu.degree} • {edu.date}
                      {edu.githubRepo && (
                        <Box
                          component="a"
                          href={edu.githubRepo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "#818cf8",
                            textDecoration: "none",
                            ml: "8px",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          ({edu.githubRepo.text})
                        </Box>
                      )}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
                  {edu.coursework && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                      <strong style={{ color: "#f3f4f6" }}>Relevant Coursework:</strong> {edu.coursework}
                    </Typography>
                  )}
                  {edu.description && (
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {edu.description.map((item, i) => (
                        <Typography
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          key={i}
                          sx={{ mb: 0.5, lineHeight: 1.6 }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}
