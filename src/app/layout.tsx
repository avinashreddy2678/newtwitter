import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftBar from "./Components/Left/LeftBar";
import RightBar from "./Components/Right/RightBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" w-[80vw]  m-auto flex h-[100vh]">
          <div className="w-3/12 md:2/6 shadow-lg h-[100vh]">
            <LeftBar/>
          </div>
          <div className="lg:w-6/12 w-5/6 shadow h-[100vh]">
             {children}
          </div>
          <div className="w-3/12 hidden  shadow-lg  lg:block h-[100vh]">
            <RightBar />
          </div>
        </main>
      </body>
    </html>
  );
}
