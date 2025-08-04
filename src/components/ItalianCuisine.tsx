import { Button } from "@/components/ui/button";
import italianBurgerImage from "@/assets/italian-burger.jpg";
import Image from "next/image";

const ItalianCuisine = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={italianBurgerImage}
                alt="Master of Italian Cuisine"
                className="w-full h-auto rounded-3xl shadow-2xl"
                width={300}
                height={200}
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Master of <span className="text-gradient">Italian Cuisine</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <Button variant="food" size="lg" className="px-8">
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItalianCuisine;
