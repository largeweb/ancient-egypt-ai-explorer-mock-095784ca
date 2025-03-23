// app/components/Header.tsx
"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-100/50 p-6 text-center border-b border-yellow-700/50">
      <h1 className="text-3xl font-semibold text-yellow-900">
        Ancient Egypt AI Explorer
      </h1>
      <p className="text-md text-yellow-700 mt-2">
        Unearth the mysteries of ancient Egypt with AI.
      </p>
    </header>
  );
};

return Header;