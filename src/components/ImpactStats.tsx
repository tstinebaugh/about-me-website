import { Box, Grid2, Typography } from "@mui/material";

const stats = [
  {
    value: "~30%",
    label: "AWS bill cut",
    detail: "About $20K/month saved by batching and caching AppSync calls (Third Hub)",
  },
  {
    value: "1.3M",
    label: "Accounts migrated",
    detail: "Idempotent, resumable migration to a four-tier subscription model (Third Hub)",
  },
  {
    value: "15 min → 90 s",
    label: "Rollup job runtime",
    detail: "Fixed an N+1 query and parallelized the Go service (Warner Bros. Discovery)",
  },
  {
    value: "25+",
    label: "Global regions",
    detail: "Discovery+ metadata ingestion on queue-based Go microservices (Warner Bros. Discovery)",
  },
];

export const ImpactStats = () => (
  <Box component="section" aria-labelledby="impact-heading" sx={{ pt: { xs: 2, md: 0 }, pb: { xs: 2, md: 4 } }}>
    <Typography
      id="impact-heading"
      variant="overline"
      component="h2"
      sx={{ display: "block", color: "text.secondary", fontWeight: 700, letterSpacing: "0.12em", mb: 2 }}
    >
      Selected impact
    </Typography>
    <Grid2 container spacing={2}>
      {stats.map((stat) => (
        <Grid2 key={stat.label} size={{ xs: 12, sm: 6, md: 3 }}>
          <Box
            sx={{
              height: "100%",
              p: 2.5,
              borderRadius: 3,
              backgroundColor: "#111827",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Typography
              component="p"
              sx={{ fontSize: { xs: "1.6rem", md: "1.75rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: "#a5b4fc", lineHeight: 1.2 }}
            >
              {stat.value}
            </Typography>
            <Typography component="p" sx={{ fontWeight: 600, mt: 0.5, mb: 0.75 }}>
              {stat.label}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
              {stat.detail}
            </Typography>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  </Box>
);
