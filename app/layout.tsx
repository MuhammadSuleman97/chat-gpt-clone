import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GPT Chat Clone",
  description: "Build by Suleman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="bg-[#343541] flex-1">
            {/* Side Bar */}

            {/* Client provider - Notifications */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
