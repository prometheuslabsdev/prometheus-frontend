import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Adjust the path if necessary

// Import Loew Medium
const loewMedium = localFont({
  src: "./fonts/Loew-Medium.otf",
  variable: "--font-loew-medium",
  weight: "400", // Adjust the weight as necessary
  style: "normal", // Set style (italic, normal, etc.)
});

// You can also import other Loew fonts like Loew Bold, Loew Regular, etc. if needed:
const loewBold = localFont({
  src: "./fonts/Loew-Bold.otf",
  variable: "--font-loew-bold",
  weight: "700", // Adjust weight for bold
});

export const metadata: Metadata = {
  title: "Prometheus Labs",
  description: "Power your event management with Prometheus Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${loewMedium.variable} ${loewBold.variable} bg-gradient-radial from-[#c1d8a8] to-[#ff9999] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
