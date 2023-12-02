import PageTemplate from "@/components/PageTemplate";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";



export const metadata: Metadata = {
  title: "Crypto Planet",
  description: "Track your favorite crypto coins",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageTemplate>
            {children}
          </PageTemplate>
        </ThemeProvider>
      </body>
    </html>
  );
}
