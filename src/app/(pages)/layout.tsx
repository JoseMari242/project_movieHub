// src/app/dashboard/layout.js

import Header from "@/utils/Components/Header/header";
import "./movies.css";
import Footer from "@/utils/Components/Footer/footer";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


      <main>
      <Header />
       {children}
       <Footer />
      </main>

  );
}