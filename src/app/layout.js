import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zakaria LOURGHI",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className+'bg-background-primary '}>{children}</body>
    </html>
  );
}