"use client";

import Image from "next/image";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-black">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Empresa */}
        <div className="flex items-center gap-3">
          {/* Logo da empresa */}
          <Image
            src={Logo}
            alt="Dev Assina"
            width={40}
            height={40}
            className="rounded-md"
          />
          <div>
            <div className="font-bold">Dev Assina</div>
            <div className="text-sm text-black/70">CNPJ: 48.446.750/001-18</div>
          </div>
        </div>

        {/* Mensagem de segurança */}
        <div className="text-center text-sm text-black/80">
          🔒 Compra 100% segura • Pagamento criptografado
            <div className="text-sm text-black/70">Contato: 11 997455530</div>
        </div>

        {/* Direitos reservados */}
        <div className="text-xs text-black/60 text-center md:text-right">
          © {new Date().getFullYear()} Dev Assina. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
