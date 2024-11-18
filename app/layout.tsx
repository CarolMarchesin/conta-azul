import type { Metadata } from "next";
import { montserrat } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema ERP de Controle Financeiro Empresarial | Conta Azul",
  description: "Sistema Conta Azul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
