import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cupcakes.jpg";
import Image from "next/image";

const MobileApp = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-amber-900 to-amber-800 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Now You Can Order on <span className="text-primary-light">Mobile Phone</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-white text-white hover:bg-white hover:text-amber-900"
            >
              DOWNLOAD NOW
            </Button>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="relative h-full">
                    <Image
                      src={heroImage}
                      alt="SmartChef Mobile App"
                      className="w-full h-full object-cover"
                      width={300}
                      height={200}
                    />
                    {/* App overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-2">Food Tastes Better When You Eat It With Your Family</h3>
                      <p className="text-sm text-white/80 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="bg-primary rounded-full px-6 py-2 text-center">
                        <span className="text-sm font-semibold">ORDER NOW</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
