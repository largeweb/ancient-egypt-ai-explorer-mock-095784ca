// app/ask-pharaoh/page.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const mockPharaohResponse = async (question: string): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (question.toLowerCase().includes("pyramid")) {
    return "Hark! The pyramids are monuments to my eternal glory, built to ensure my passage to the afterlife and to inspire awe for generations to come. Their construction is a testament to the power and divine right of the pharaoh!";
  } else if (question.toLowerCase().includes("nile")) {
    return "The Nile is the lifeblood of Egypt, blessed by the gods! It provides sustenance, allows for trade, and nourishes the land, ensuring bountiful harvests.";
  } else {
    return "As Pharaoh, I command you to respect my wisdom and authority! My decisions are final and guide our great nation.";
  }
};

return function AskPharaohPage() {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom of chat log on new message
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setChatLog((prev) => [...prev, `You: ${question}`]);

    try {
      const response = await mockPharaohResponse(question);
      setChatLog((prev) => [...prev, `Pharaoh: ${response}`]);
    } catch (error) {
      console.error("Error getting response:", error);
      setChatLog((prev) => [...prev, "Pharaoh: My scribes are unable to interpret your request at this time."]);
    } finally {
      setIsLoading(false);
      setQuestion("");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 text-center">
        <h1 className="text-2xl font-semibold">Ask the Pharaoh</h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row p-4">
        {/* Left Column (Pharaoh Image/Info) */}
        <div className="md:w-1/3 p-4">
          <img
            src="/pharaoh.png" // Replace with an actual image if available
            alt="Pharaoh"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-center">
            Tutankhamun (Simulated)
          </h2>
          <p className="text-sm text-center">
            "Ruler of Ancient Egypt. Seeker of wisdom."
          </p>
        </div>

        {/* Right Column (Chat Log) */}
        <div className="md:w-2/3 flex flex-col">
          {/* Chat Log */}
          <div ref={chatLogRef} className="flex-1 overflow-y-auto p-4 space-y-2">
            {chatLog.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg ${message.startsWith("You:") ? "bg-blue-200 text-blue-800 self-start" : "bg-yellow-200 text-yellow-800 self-end"
                  }`}
              >
                {message}
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="p-3 rounded-lg bg-gray-200 text-gray-700 self-end"
              >
                Thinking...
              </motion.div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4">
            <div className="flex">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask the Pharaoh..."
                className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                Ask
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-2 text-center text-sm">
        Simulated AI Experience
      </footer>
    </div>
  );
}