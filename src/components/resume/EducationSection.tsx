import {
    Typography,
    Box,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
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
import { Education } from "../../data/resume"; // Adjust path as needed

interface EducationSectionProps {
    education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Education
            </Typography>
            <Timeline
                position="right"
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {education.map((edu, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Accordion elevation={0} disableGutters>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={{ padding: 0 }}
                                >
                                    <Box>
                                        <Typography variant="h6">{edu.institution}</Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {edu.degree} • {edu.date}
                                            {edu.githubRepo && (
                                                <Box
                                                  component="a"
                                                  href={edu.githubRepo.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  sx={{ color: "inherit", textDecoration: "underline", ml: "8px" }}
                                                >
                                                  {edu.githubRepo.text}
                                                </Box>
                                            )}
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    {edu.coursework && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            <b>Relevant Coursework:</b> {edu.coursework}
                                        </Typography>
                                    )}
                                    {edu.description && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {edu.description.map((item, i) => (
                                                <span key={i}>• {item}<br /></span>
                                            ))}
                                        </Typography>
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
