// app/components/Navigation.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <nav className="flex space-x-4 justify-center p-4">
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <Link href="/ask-pharaoh" className="text-md font-medium text-yellow-200 hover:text-yellow-400 transition-colors">
          Ask the Pharaoh
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <Link href="/hieroglyph-translator" className="text-md font-medium text-yellow-200 hover:text-yellow-400 transition-colors">
          Hieroglyph Translator
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <Link href="/build-pyramid" className="text-md font-medium text-yellow-200 hover:text-yellow-400 transition-colors">
          Build a Pyramid
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <Link href="/artifact-identifier" className="text-md font-medium text-yellow-200 hover:text-yellow-400 transition-colors">
          Artifact Identifier
        </Link>
      </motion.div>
    </nav>
  );
};

return Navigation;