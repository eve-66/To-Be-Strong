import type { Metadata } from "next";
import "./globals.css";
import User from "./components/user";

export const metadata: Metadata = {
  title: "To-Be-Strong",
  description: "Keep growing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full">
        <User />
        {children}
      </body>
    </html>
  );
}
