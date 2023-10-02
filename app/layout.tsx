import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dvor",
  description: "Feels-like-home-app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
