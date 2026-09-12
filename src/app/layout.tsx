import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rob Stigau — Portfolio",
    template: "%s | Rob Stigau",
  },
  description:
    "Rob Stigau's portfolio of embedded systems, wireless robotics, software, and hands-on engineering projects.",
  openGraph: {
    title: "Rob Stigau — Portfolio",
    description: "Embedded systems, wireless robotics, and practical software built with care.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3f0e8",
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
