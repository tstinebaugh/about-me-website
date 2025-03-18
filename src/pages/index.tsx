import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Hero />
      <Skills />
      <Contact />
    </motion.div>
  );
}
