"use client";

import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 mt-auto border-t border-border/20 bg-background/80">
      <div className="container mx-auto px-4 md:px-6 text-center text-foreground/60">
        <p>&copy; {currentYear} Nuwan C. Perera. All rights reserved.</p>
        <p className="text-sm font-body">Built with Firebase AI Studio, Codex(Open AI), Junie(IntelliJ) </p>
      </div>
    </footer>
  );
}
