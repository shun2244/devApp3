// import localFont from "next/font/local";
import Header from "@/app/components/admin/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header></Header>
      <>
       {children}
      </>
    </>
    
  );
}
