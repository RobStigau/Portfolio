import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rob Stigau — Portfolio",
    template: "%s | Rob Stigau",
  },
  description:
    "The personal portfolio of Rob Stigau — selected work, experiments, and things built with care.",
  openGraph: {
    title: "Rob Stigau — Portfolio",
    description: "Selected work, experiments, and things built with care.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
