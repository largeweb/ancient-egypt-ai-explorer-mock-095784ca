// app/build-pyramid/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Mock Data
const initialBlocks = [
  { id: "block1", text: "Block 1 (2.5 tons)", info: "This block was quarried from Aswan." },
  { id: "block2", text: "Block 2 (3 tons)", info: "This block is made of limestone." },
  { id: "block3", text: "Block 3 (2 tons)", info: "This block was used in the inner structure." },
];

const pyramidOutline = [
  { id: "level1", slots: 5 },
  { id: "level2", slots: 4 },
  { id: "level3", slots: 3 },
  { id: "level4", slots: 2 },
  { id: "level5", slots: 1 },
];

const App = () => {
  const [pyramidBlocks, setPyramidBlocks] = useState<{ level: string; blockId: string; }[]>([]);
  const [currentInfo, setCurrentInfo] = useState("Drag blocks onto the pyramid to learn more.");

  const getBlockInfo = (blockId: string) => {
    const block = initialBlocks.find((b) => b.id === blockId);
    return block ? block.info : "No information available.";
  };

  const handleBlockDrop = (level: string, blockId: string) => {
    // In a full implementation, this would handle adding the block to the pyramid
    // And updating the info.
    setPyramidBlocks([...pyramidBlocks, {level, blockId}]);
    setCurrentInfo(getBlockInfo(blockId));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-yellow-100 p-4">
      {/* Draggable Blocks */}
      <div className="w-full md:w-1/3 p-4">
        <h2 className="text-xl font-bold mb-4">Blocks</h2>
        <div className="space-y-2">
          {initialBlocks.map((block) => (
            <div
              key={block.id}
              className="bg-yellow-200 p-3 rounded cursor-grab"
              // Make draggable
            >
              {block.text}
            </div>
          ))}
        </div>
      </div>

      {/* Pyramid Outline */}
      <div className="w-full md:w-1/3 p-4">
        <h2 className="text-xl font-bold mb-4">Build the Pyramid</h2>
        <div className="space-y-2">
          {pyramidOutline.map((level) => (
            <div key={level.id} className="flex justify-center">
              {Array.from({ length: level.slots }).map((_, index) => (
                <div
                  key={`${level.id}-${index}`}
                  className="w-12 h-12 border border-gray-400 m-1"
                  // Make droppable
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Information Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/3 p-4"
      >
        <h2 className="text-xl font-bold mb-4">Block Information</h2>
        <p>{currentInfo}</p>
      </motion.div>
    </div>
  );
};

return App;