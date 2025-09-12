import Providers from "@/providers";
import "../globals.css";
import { ReactNode, Suspense } from "react";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <Providers>{children}</Providers>
    </Suspense>
  );
}

function LoadingComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-orange-100/20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p>Carregando informações do pagamento...</p>
      </div>
    </div>
  );
}
