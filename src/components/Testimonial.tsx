import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Deo",
      title: "CEO & Co-Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const additionalCustomers = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  ];

  return (
    <section id="testimonial" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Customer Avatars */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main testimonial avatar */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                    width={300}
                    height={200}
                  />
                </div>

                {/* Surrounding smaller avatars */}
                {additionalCustomers.map((avatar, index) => {
                  const positions = [
                    { top: "10%", left: "-20%" },
                    { top: "60%", left: "-30%" },
                    { bottom: "20%", right: "-20%" },
                    { top: "5%", right: "-15%" },
                  ];

                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 rounded-full overflow-hidden border-2 border-background shadow-lg"
                      style={positions[index]}
                    >
                      <Image
                        src={avatar}
                        alt={`Customer ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={300}
                        height={200}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right - Testimonial Content */}
            <div className="space-y-6">
              <div className="text-4xl text-primary">"</div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed">{testimonials[0].quote}</blockquote>
              <div>
                <div className="font-bold text-lg">{testimonials[0].name}</div>
                <div className="text-muted-foreground">{testimonials[0].title}</div>
              </div>

              {/* Rating dots */}
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-primary"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
