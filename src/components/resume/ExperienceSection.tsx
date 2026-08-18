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
import { Experience } from "../../data/resume";

interface ExperienceSectionProps {
  workExperience: Experience[];
}

export default function ExperienceSection({
  workExperience,
}: ExperienceSectionProps) {
  return (
    <Paper sx={{ ...resumeSectionPaperSx, mb: 3.5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Work Experience
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
        {workExperience.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  backgroundColor: "#6366f1",
                  boxShadow: "0 0 8px rgba(99, 102, 241, 0.4)",
                  my: 1.5,
                }}
              />
              {index < workExperience.length - 1 && (
                <TimelineConnector sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pr: 0 }}>
              <Accordion
                elevation={0}
                disableGutters
                defaultExpanded={index === 0}
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
                      {experience.company}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
                      {experience.title} • {experience.date}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {experience.description.map((item, i) => (
                      <Typography
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        key={i}
                        sx={{ mb: 0.75, lineHeight: 1.6 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}
