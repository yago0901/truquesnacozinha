import { Button } from "@/components/ui/button";
import frenchMacaronsImage from "@/assets/french-macarons.jpg";
import Image from "next/image";

const SpecialMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "French Macarons",
      description: "Delicate French macarons",
      price: "$15.30",
      image: frenchMacaronsImage,
    },
    {
      id: 2,
      name: "French Macarons",
      description: "Delicate French macarons",
      price: "$16.30",
      image: frenchMacaronsImage,
    },
    {
      id: 3,
      name: "French Macarons",
      description: "Delicate French macarons",
      price: "$17.30",
      image: frenchMacaronsImage,
    },
  ];

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">Special Menu</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <Button variant="food" size="lg" className="px-8">
              VIEW OUR MENU
            </Button>
          </div>

          {/* Right Content - Menu Items */}
          <div className="grid gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-card rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                    width={300}
                    height={200}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
