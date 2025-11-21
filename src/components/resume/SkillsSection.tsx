import { Typography, Paper } from "@mui/material";
import { resumeSectionPaperSx } from "./resumeSectionStyles";
import { SkillCategory, Language } from "../../data/resume"; // Adjust path as needed

interface SkillsSectionProps {
  technicalSkills: SkillCategory;
  softSkills: SkillCategory;
  languages: Language[];
}

export default function SkillsSection({
  technicalSkills,
  softSkills,
  languages,
}: SkillsSectionProps) {
  return (
    <Paper sx={{ ...resumeSectionPaperSx, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {technicalSkills.category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {technicalSkills.skills.map((skill, index) => (
          <span key={index}>
            {skill}
            <br />
          </span>
        ))}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        {softSkills.category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {softSkills.skills.map((skill, index) => (
          <span key={index}>
            {skill}
            <br />
          </span>
        ))}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        Languages
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {languages.map((lang, index) => (
          <span key={index}>
            {lang.name}: {lang.proficiency}
            <br />
          </span>
        ))}
      </Typography>
    </Paper>
  );
}
