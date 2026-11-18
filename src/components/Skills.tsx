import { Typography, Box, Grid2, Card, CardContent, Chip, Stack } from "@mui/material";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Hub as HubIcon,
} from "@mui/icons-material";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <HubIcon sx={{ fontSize: 32, color: "#818cf8" }} />,
      skills: ["Golang", "Python", "Node.js", "Microservices", "REST & GraphQL", "gRPC"],
      description: "Distributed architectures, scalable ingestion pipelines, and resilient APIs.",
    },
    {
      title: "Data & Storage",
      icon: <StorageIcon sx={{ fontSize: 32, color: "#34d399" }} />,
      skills: ["PostgreSQL", "Redis", "MongoDB", "SQL Optimization", "Data Modeling"],
      description: "Performant relational schemas, caching strategies, and high-throughput pipelines.",
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon sx={{ fontSize: 32, color: "#60a5fa" }} />,
      skills: ["AWS (Lambda, S3, RDS)", "Docker", "Kubernetes", "CI/CD", "Pulumi / IaC"],
      description: "Automated infrastructure, container orchestration, and cloud-native deployments.",
    },
    {
      title: "Frontend & Web",
      icon: <CodeIcon sx={{ fontSize: 32, color: "#f472b6" }} />,
      skills: ["TypeScript", "React", "Next.js", "State Management", "Material UI", "PWAs"],
      description: "Type-safe, accessible, and high-performance modern user interfaces.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.02em",
            mb: 1.5,
          }}
        >
          Core Technical Competencies
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "600px", mx: "auto" }}
        >
          Key technologies and architectural domains I leverage to build production-grade systems.
        </Typography>
      </Box>

      <div>
        <Grid2 container spacing={3}>
          {skillCategories.map((cat, index) => (
            <Grid2 size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <div style={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 2.5,
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: 3,
                    transition: "border-color 0.15s ease-out",
                    "@media (hover: hover)": {
                      "&:hover": { borderColor: "rgba(99, 102, 241, 0.4)" },
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, flexGrow: 1 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      {cat.icon}
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {cat.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, fontSize: "0.875rem", minHeight: "40px" }}
                    >
                      {cat.description}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={0.75}>
                      {cat.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            fontSize: "0.75rem",
                            height: "24px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </Box>
  );
};
