import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GridContainer from "@/components/ui/GridContainer/grid-container";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";


const geistSans =  Montserrat ({
 
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Montserrat({
 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JournalMind",
  description: "Redefine your thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GridContainer>
            <Navbar />  {/* ⬅️ Inject Navbar at the top */}
           {children}
           <Footer />
          </GridContainer>

        </ThemeProvider>
      </body>
    </html>
  );
}
