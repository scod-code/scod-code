import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somtochukwu Osigwe-Daniel | AI/ML Engineer",
  description:
    "MSc Artificial Intelligence at Nottingham Trent University. Specializing in Generative AI, Multi-Agent Systems, LLM Safety & Evaluation, and MLOps.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "Multi-Agent Systems",
    "LLM",
    "MLOps",
    "Python",
    "C++",
    "Nottingham Trent University",
    "Robotics",
  ],
  authors: [{ name: "Somtochukwu Osigwe-Daniel" }],
  openGraph: {
    title: "Somtochukwu Osigwe-Daniel | AI/ML Engineer",
    description:
      "Building end-to-end ML pipelines, deploying REST APIs, and engineering scalable systems from research prototype to production.",
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
