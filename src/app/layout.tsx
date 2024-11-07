"use client"
import { ReactNode } from "react";
import "./globals.css";
import dynamic from "next/dynamic";

const DynamicContextProvider = dynamic(() => import('@/features/character/contexts/CharacterContext').then(mod => mod.CharacterProvider), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <DynamicContextProvider>
          {children}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
