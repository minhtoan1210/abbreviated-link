'use client'
import { useDemo } from "@/queries/useDemo";
import Image from "next/image";

export default function Homee() {
  const accountListQuery = useDemo()
  console.log("accountListQuery", accountListQuery)
  
  return (
   <h1>Login</h1>
  );
}
