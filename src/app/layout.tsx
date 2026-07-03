import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somtochukwu Osigwe-Daniel | Robotics & Intelligent Systems Engineer",
  description:
    "MSc Robotics and Intelligent Systems at Nottingham Trent University. Specializing in autonomous systems, Generative AI, Multi-Agent Orchestration, and MLOps.",
  keywords: [
    "Robotics Engineer",
    "Intelligent Systems",
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "Multi-Agent Systems",
    "MLOps",
    "Python",
    "C++",
    "Nottingham Trent University",
    "Autonomous Systems",
  ],
  authors: [{ name: "Somtochukwu Osigwe-Daniel" }],
  openGraph: {
    title: "Somtochukwu Osigwe-Daniel | Robotics & Intelligent Systems Engineer",
    description:
      "Building intelligent autonomous systems, end-to-end ML pipelines, and engineering scalable solutions from research to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
