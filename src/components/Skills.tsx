import { Typography, Box, Grid2, Container } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
} from "@mui/icons-material";

const AnimatedCard = styled(motion.div)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.primary.dark,
  },
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      description: "React, Redux, Next.js, TypeScript, JavaScript",
    },
    {
      title: "Backend Development",
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      description: "Golang, Node.js, Python",
    },
    {
      title: "Database Management",
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      description: "MongoDB, PostgreSQL, Redis",
    },
    {
      title: "Cloud Services",
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      description: "AWS, Vercel, GCP",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom align="center">
          Skills & Technologies
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid2 container spacing={4} sx={{ mt: 4 }}>
            {skills.map((skill, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div variants={itemVariants}>
                  <AnimatedCard
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      {skill.icon}
                      <Typography variant="h6" align="center">
                        {skill.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        component="p"
                      >
                        {skill.description}
                      </Typography>
                    </Box>
                  </AnimatedCard>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </motion.div>
      </Container>
    </Box>
  );
};
