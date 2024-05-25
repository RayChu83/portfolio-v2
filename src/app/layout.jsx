import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Ray Chu",
  description:
    "Ray Chu is an aspiring Front-End Developer born and raised in Manhattan NY.",
  keywords: [
    "Ray Chu",
    "Software Developer",
    "Front End Developer",
    "Computer Science",
    "Web Developer",
    "UI Designer",
    "New York City",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
