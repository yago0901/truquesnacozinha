"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "INÍCIO", href: "#home" },
    { label: "VOLUMES", href: "#volumes" },
    { label: "DEPOIMENTOS", href: "#testimonials" },
    { label: "PREÇOS", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gradient">TRUQUES NA COZINHA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="food"
              size="sm"
              className="hidden md:flex"
              onClick={() => {
                // Adicione aqui qualquer lógica de pré-redirecionamento
                // Ex: Analytics, validações, etc.
                window.open("https://mpago.la/1Er6XxF", "_blank", "noopener,noreferrer");
              }}
            >
              COMPRAR AGORA
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="food"
                size="sm"
                className="justify-start"
                onClick={() => {
                  // Adicione aqui qualquer lógica de pré-redirecionamento
                  // Ex: Analytics, validações, etc.
                  window.open("https://mpago.la/1Er6XxF", "_blank", "noopener,noreferrer");
                }}
              >
                COMPRAR AGORA
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
