import charredAvocadoImage from "@/assets/charred-avocado.jpg";
import crispyPotatoesImage from "@/assets/crispy-potatoes.jpg";
import multigrainCerealImage from "@/assets/multigrain-cereal.jpg";
import Image from "next/image";

const SpecialDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Charred Avocado",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: charredAvocadoImage,
    },
    {
      id: 2,
      name: "Crispy Potatoes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: crispyPotatoesImage,
    },
    {
      id: 3,
      name: "Multigrain Hot Cereal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: multigrainCerealImage,
    },
  ];

  return (
    <section id="speciality" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Special Dish</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="group">
              <div className="bg-card rounded-3xl p-6 card-hover">
                <div className="mb-6">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-2xl"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
