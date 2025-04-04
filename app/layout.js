import { Geist, Geist_Mono } from "next/font/google";
import {jakartaSans,italianno} from './fonts'
import "./globals.css";
import Navbar from "@/components/nav-bar";
import SmoothScrolling from "@/components/ui/smooth-scroll";


export const metadata = {
  title: "Gárgolas de Sevilla",
  description: "Recorrido por las gárgolas de Sevilla",
};

export default function RootLayout({ children }) {
  console.log(italianno)
  return (
    <html lang="es">
      <body
        className={`${jakartaSans.variable} jakarta ${italianno.variable}  antialiased`}
      >
        <Navbar />
        <SmoothScrolling>
        {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
