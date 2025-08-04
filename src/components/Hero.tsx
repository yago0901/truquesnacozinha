import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cupcakes.jpg";
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Food Tastes Better When{" "}
                <span className="text-gradient">You Eat It</span>{" "}
                With Your Family
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Food is any substance consumed to provide nutritional support for an organism. 
                It is usually of plant or animal origin, and contains essential nutrients, 
                such as carbohydrates, fats, proteins, vitamins, or minerals.
              </p>
            </div>
            <Button variant="food" size="lg" className="px-8">
              ORDER NOW
            </Button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={heroImage}
                alt="Delicious cupcakes and pastries"
                className="w-full h-auto rounded-3xl shadow-2xl"
                width={300}
                height={200}
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;