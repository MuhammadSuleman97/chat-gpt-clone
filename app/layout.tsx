import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogIn from "@/components/LogIn";

export const metadata: Metadata = {
  title: "GPT Chat Clone",
  description: "Build by Suleman",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);


  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {
          !session ? (
            <LogIn />
          ) : (
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:in-w-[20rem]">
          <SideBar />
          </div>
          <div className="bg-[#343541] flex-1">
            {/* Side Bar */}

            {/* Client provider - Notifications */}
            {children}
          </div>
        </div>
          )}
        </SessionProvider>
  
      </body>
    </html>
  );
}
