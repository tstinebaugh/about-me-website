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
import { Experience } from "../../data/resume"; // Adjust path as needed

interface ExperienceSectionProps {
    workExperience: Experience[];
}

export default function ExperienceSection({ workExperience }: ExperienceSectionProps) {
    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
                Work Experience
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
                {workExperience.map((experience, index) => (
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
                                        <Typography variant="h6">{experience.company}</Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {experience.title} • {experience.date}
                                        </Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: 0 }}>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        {experience.description.map((item, i) => (
                                            <span key={i}>• {item}<br /></span>
                                        ))}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Paper>
    );
}
