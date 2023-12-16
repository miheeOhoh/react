import type { Metadata } from "next";
import "./globals.css";
import {publicSans, roboto} from "@/shared";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`${publicSans.variable} ${roboto.variable}`}>
        <body >{children}</body>
      </html>
  );
}


// <html lang="en" className={`${publicSans.className} ${roboto.variable}`}>