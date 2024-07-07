import type { Metadata } from "next";
import { Inter, Raleway, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Chase Peterson",
  description: "Chase Peterson, Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-cool-grey-100">
      <body
        className={`${inter.className} ${raleway.variable} ${inter.variable} ${source_serif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
