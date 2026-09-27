import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Header from "./components/Header";
import { siteContact } from "./site-config";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jai Gajanan Souharda Credit Co-operative Ltd.",
  description: `Trusted cooperative banking, savings, deposits, gold loans, and financial services in Bhalki. Contact ${siteContact.email}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-gray-800">
        <Header />
        {children}
      </body>
    </html>
  );
}
