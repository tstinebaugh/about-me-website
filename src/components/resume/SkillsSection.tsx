import { Typography, Paper, Box, Chip, Stack } from "@mui/material";
import { resumeSectionPaperSx } from "./resumeSectionStyles";
import { SkillCategory, Language } from "../../data/resume";

interface SkillsSectionProps {
  technicalSkills?: SkillCategory;
  allSkillCategories?: SkillCategory[];
  softSkills?: SkillCategory;
  languages: Language[];
}

export default function SkillsSection({
  technicalSkills,
  allSkillCategories,
  softSkills,
  languages,
}: SkillsSectionProps) {
  const categories =
    allSkillCategories ||
    (technicalSkills
      ? [technicalSkills, ...(softSkills ? [softSkills] : [])]
      : []);

  const categoryColors = [
    "#818cf8", // Indigo
    "#34d399", // Emerald
    "#60a5fa", // Blue
    "#f472b6", // Pink
    "#fbbf24", // Amber
    "#a78bfa", // Purple
    "#38bdf8", // Sky
  ];

  return (
    <Paper sx={{ ...resumeSectionPaperSx, mb: 3.5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
        Technical Skills
      </Typography>

      {categories.map((cat, catIdx) => (
        <Box key={cat.category} sx={{ mb: 2.5 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: categoryColors[catIdx % categoryColors.length],
              mb: 0.75,
              fontSize: "0.85rem",
            }}
          >
            {cat.category}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.75}>
            {cat.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  fontSize: "0.75rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              />
            ))}
          </Stack>
        </Box>
      ))}

      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 600, color: "#38bdf8", mb: 0.75, fontSize: "0.85rem" }}
      >
        Languages
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
        {languages.map((lang, index) => (
          <Typography
            variant="body2"
            color="text.secondary"
            key={index}
            sx={{ fontSize: "0.85rem" }}
          >
            <strong style={{ color: "#f3f4f6" }}>{lang.name}:</strong> {lang.proficiency}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
}
