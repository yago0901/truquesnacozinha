import Providers from "@/providers";
import "../globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  );
}
