// import localFont from "next/font/local";
import Sideber from "@/app/components/admin/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sideber></Sideber>
      <>
       {children}
      </>
    </div>
    
  );
}
