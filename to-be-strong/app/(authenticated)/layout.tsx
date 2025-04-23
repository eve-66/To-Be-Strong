import User from "../components/user";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-black ">
      <User />
      {children}
    </div>
  );
}