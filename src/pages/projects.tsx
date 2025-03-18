import {
  Typography,
  Box,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Image Search and Download App",
    description: "Searches the web for images and allows bulk downloading",
    image: "../../image_search_app.png",
    technologies: ["React", "Node.js", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/tstinebaugh/image-search-app",
    liveUrl: "https://image-search-app-rho-beryl.vercel.app/",
  },
  {
    title: "Agent Browser App",
    description:
      "Create and browse network agents and modify them from a web UI",
    image: "../../agent_app.png",
    technologies: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/tstinebaugh/agent-app",
    liveUrl: "",
  },
  {
    title: "Fullstack Open Course",
    description: "Completed Fullstack Open course @ University of Helsinki",
    image: "../../fullstackopen.svg",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Cypress",
      "GraphQL",
    ],
    githubUrl: "https://github.com/tstinebaugh/fullstackopencoursework",
    liveUrl: "",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <Container>
      <motion.div initial="hidden" animate="show" variants={container}>
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            My Projects
          </Typography>

          <Grid2 container spacing={4}>
            {projects.map((project, index) => (
              <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                <motion.div variants={item}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: { xs: "150px", sm: "200px", md: "250px" },
                        objectFit: "contain",
                      }}
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" component="p" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        gap={1}
                      >
                        {project.technologies.map((tech) => (
                          <Chip key={tech} label={tech} size="small" />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions>
                      {project.githubUrl && (
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.githubUrl}
                          target="_blank"
                        >
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.liveUrl}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </motion.div>
    </Container>
  );
}
