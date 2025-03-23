// app/artifact-identifier/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Mock data for artifact images
const artifactImages = [
  { id: "artifact1", url: "/artifact1.jpg", name: "Sarcophagus" },
  { id: "artifact2", url: "/artifact2.jpg", name: "Rosetta Stone" },
];

// Mock function to simulate AI analysis and historical context
const getArtifactInfo = (imageId: string) => {
  switch (imageId) {
    case "artifact1":
      return {
        analysis:
          "AI identifies this as a sarcophagus, likely from the late period of ancient Egypt. The intricate carvings suggest it belonged to a high-ranking official or noble.",
        context:
          "Sarcophagi were elaborate containers for mummified remains, intended to protect the deceased on their journey to the afterlife. They provide valuable insights into ancient Egyptian beliefs and funerary practices.",
      };
    case "artifact2":
      return {
        analysis:
          "AI recognizes this as the Rosetta Stone. It is fragmented, but the text is clearly visible. The text provides the same decree written in three scripts.",
        context:
          "The Rosetta Stone was key to deciphering hieroglyphs. It contains a decree written in hieroglyphic, demotic, and ancient Greek, providing a crucial key to understanding ancient Egyptian writing.",
      };
    default:
      return {
        analysis: "AI could not identify this artifact.",
        context: "No information available.",
      };
  }
};

return function ArtifactIdentifierPage() {
  const [selectedImageId, setSelectedImageId] = useState(artifactImages[0].id);
  const artifactInfo = getArtifactInfo(selectedImageId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Ancient Artifact Identifier
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Image Selection */}
        <div className="w-full md:w-1/3">
          <label htmlFor="artifactSelect" className="block text-sm font-medium">
            Select an Artifact:
          </label>
          <select
            id="artifactSelect"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={selectedImageId}
            onChange={(e) => setSelectedImageId(e.target.value)}
          >
            {artifactImages.map((image) => (
              <option key={image.id} value={image.id}>
                {image.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Display and Analysis */}
        <div className="w-full md:w-2/3">
          {/* Selected Image */}
          <img
            src={artifactImages.find((img) => img.id === selectedImageId)?.url}
            alt="Selected Artifact"
            className="w-full rounded-lg mb-4"
          />

          {/* AI Analysis and Context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">AI Analysis</h2>
            <p className="mb-4">{artifactInfo.analysis}</p>

            <h2 className="text-xl font-semibold mb-2">Historical Context</h2>
            <p>{artifactInfo.context}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}