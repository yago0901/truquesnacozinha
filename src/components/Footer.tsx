import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const usefulLinks = [
    "Home", "Speciality", "Menu", "Testimonial", "Contact", "Blog", "FAQ"
  ];

  return (
    <footer className="bg-muted py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gradient">SMARTCHEF</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Useful Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {usefulLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>📞 +012-3456-7890</div>
              <div>📧 info@smartchef.com</div>
              <div>📍 123 Street, New York, USA</div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SmartChef. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;