import type { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas-base antialiased">
        {children}
      </body>
    </html>
  );
}
