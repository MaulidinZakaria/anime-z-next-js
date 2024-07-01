import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Footer";
config.autoAddCss = false;

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeZ",
  description: "Website Anime Ala Kadarnya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"/>
      </head>
      <body className={`${gabarito.className} bg-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
