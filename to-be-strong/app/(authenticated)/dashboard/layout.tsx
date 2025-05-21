import { signOut } from "@/app/libs/actions";
import User from "../../ui/user";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-black ">
      <div className="w-1/5">
        <User />
      </div>
      {children}
    </div>
  );
}