import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div className="bg-linear-to-t from-background via-theme to-background h-screen flex flex-col items-center justify-center no-caret">
          {children}
        </div>
      </body>
    </html>
  );
}
