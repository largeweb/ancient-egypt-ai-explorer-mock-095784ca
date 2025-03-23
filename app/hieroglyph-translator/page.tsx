// app/hieroglyph-translator/page.tsx
"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";

// Mock translation functions
const mockTranslateToHieroglyphs = async (text: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API latency
  // Replace each character with a simple "hieroglyph" (just for mock)
  return text
    .toUpperCase()
    .split("")
    .map((char) => `[${char}]`)
    .join(" ");
};

const mockTranslateFromHieroglyphs = async (hieroglyphs: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API latency
  // Reverse the "hieroglyph" process (just for mock)
  return hieroglyphs
    .split(" ")
    .map((glyph) => glyph.slice(1, -1))
    .join("")
    .toLowerCase();
};

export default function HieroglyphTranslator() {
  const [englishInput, setEnglishInput] = useState("");
  const [hieroglyphOutput, setHieroglyphOutput] = useState("");
  const [hieroglyphInput, setHieroglyphInput] = useState("");
  const [englishOutput, setEnglishOutput] = useState("");

  const handleCopyToHieroglyph = useCallback(() => {
    navigator.clipboard.writeText(hieroglyphOutput);
  }, [hieroglyphOutput]);

  const handleCopyToEnglish = useCallback(() => {
    navigator.clipboard.writeText(englishOutput);
  }, [englishOutput]);

  const translateToHieroglyphs = async () => {
    const translated = await mockTranslateToHieroglyphs(englishInput);
    setHieroglyphOutput(translated);
  };

  const translateFromHieroglyphs = async () => {
    const translated = await mockTranslateFromHieroglyphs(hieroglyphInput);
    setEnglishOutput(translated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-500 text-center">
        Hieroglyphic Translator
      </h1>

      <div className="md:flex md:space-x-6">
        {/* To Hieroglyphs */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold text-blue-400">To Hieroglyphs</h2>
          <textarea
            placeholder="Enter text to translate..."
            className="w-full p-3 border rounded text-gray-800"
            value={englishInput}
            onChange={(e) => setEnglishInput(e.target.value)}
          />
          <button
            onClick={translateToHieroglyphs}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Translate
          </button>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hieroglyphOutput ? 1 : 0 }}
              className="p-3 border rounded bg-gray-50 text-gray-700"
            >
              {hieroglyphOutput}
            </motion.div>
            {hieroglyphOutput && (
              <button
                onClick={handleCopyToHieroglyph}
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
              >
                <FiCopy className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* From Hieroglyphs */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold text-blue-400">From Hieroglyphs</h2>
          <textarea
            placeholder="Enter hieroglyphs to translate..."
            className="w-full p-3 border rounded text-gray-800"
            value={hieroglyphInput}
            onChange={(e) => setHieroglyphInput(e.target.value)}
          />
          <button
            onClick={translateFromHieroglyphs}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Translate
          </button>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: englishOutput ? 1 : 0 }}
              className="p-3 border rounded bg-gray-50 text-gray-700"
            >
              {englishOutput}
            </motion.div>
            {englishOutput && (
              <button
                onClick={handleCopyToEnglish}
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
              >
                <FiCopy className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}