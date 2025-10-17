import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Ascension - Pilot School & Skydiving",
  description: "Experience the thrill of skydiving or start your aviation journey with Apex Ascension Adventure Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}