import React from "react";
import { motion } from "framer-motion";

export default function Animation({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -35 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex items-end gap-1"
    >
      {children}
    </motion.div>
  );
}
