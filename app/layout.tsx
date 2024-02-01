import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "LoL Scrim Manager",
  description: "Manage your team's scrims with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <div className="flex">
          <Sidebar />
          <main className="py-6 md:py-12 flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
