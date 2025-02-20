import localFont from "next/font/local";
import "../../globals.css";
import NavbarUser from "./navbar";
import SidebarUser from "./sidebar";

// Define custom fonts
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

// Metadata for the page
export const metadata = {
  title: "Vehicle Renting / user Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavbarUser />
        <div className="flex flex-row">
          <SidebarUser />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
