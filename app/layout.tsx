import type { Metadata } from "next";
import "@/globals.css"
import { Rubik } from "next/font/google";

const Rubik_Latin = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: "swap",
});


export const metadata: Metadata = {
  title: "Wallet App",
  description: "By Vlad L.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        backgroundColor: "rgba(0,0,0,0.2)"
      }} className={Rubik_Latin.className}>
        <div className="bg-page">
          {children}
        </div>
      </body>
    </html>
  );
}
