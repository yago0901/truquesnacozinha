import Providers from '@/providers';
import "../globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Seu Título",
  description: "Descrição do site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}