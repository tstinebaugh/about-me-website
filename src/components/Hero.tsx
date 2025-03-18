import { Typography, Box, Button, Container } from "@mui/material";
import { Grid2 } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../public/profile_alaska.jpeg";
import Link from "next/link";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <motion.div variants={fadeInUp}>
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(45deg, #1a1a1a 30%, #2c2c2c 90%)",
        }}
      >
        <Container>
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" component="h1" gutterBottom>
                  Hi, I&apos;m Travis!
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom>
                  Backend & Full Stack Developer
                </Typography>
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  I create beautiful, meaningful, and responsive web
                  applications with modern technologies.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#contact"
                    sx={{ mr: 2 }}
                  >
                    Contact Me
                  </Button>
                  <Link href="/projects">
                    <Button variant="outlined" size="large">
                      View Projects
                    </Button>
                  </Link>
                </Box>
              </motion.div>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Image
                src={hero}
                alt="Photo of Travis Stinebaugh"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              ></Image>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </motion.div>
  );
};
