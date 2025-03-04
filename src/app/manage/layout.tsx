import React from "react";
import Sidebar from "./sidebar";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
   <Sidebar children={children}/>
  );
}
