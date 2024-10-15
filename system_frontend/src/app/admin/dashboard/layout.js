// src/app/layout.js
import localFont from "next/font/local";
import "../../globals.css";
import NavbarOwner from "./navbar";
import SidebarOwner from "./sidebar";


const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vehicle Renting / Owner Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavbarOwner />
        <div className="flex flex-row"> 
        <SidebarOwner/>
        <main className="flex-grow">
          {children} {/* Ensure children are placed correctly */}
        </main>
        </div>
        
        
      </body>
    </html>
  );
}
