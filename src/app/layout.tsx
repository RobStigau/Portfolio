import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rob Stigau — Portfolio",
    template: "%s | Rob Stigau",
  },
  description:
    "Explore Rob Stigau's interactive portfolio — digital products, creative experiments, and useful tools built with care.",
  openGraph: {
    title: "Rob Stigau — Portfolio",
    description: "An interactive archive of digital products, experiments, and useful tools.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#030407",
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
