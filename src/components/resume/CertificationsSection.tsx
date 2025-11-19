import { Typography, Paper, Box } from "@mui/material";
import { Certification } from "../../data/resume"; // Adjust path as needed

interface CertificationsSectionProps {
    certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Certifications
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {certifications.map((cert, index) => (
                    <span key={index}>{cert.name}<br /></span>
                ))}
            </Typography>
        </Paper>
    );
}
