import { pizzaData } from "../data/pizzaData";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="flex w-full flex-col items-center gap-10">
      <h1 className="text-4xl font-black">
        Our <span className="text-[#E63946]">Menu.</span>
      </h1>

      {numPizzas > 0 ? (
        // Removed max-w-350 and added md:px-8 for better edge spacing
        <div className="w-full px-4 md:px-8">
          <ul className="grid w-full list-none grid-cols-1 gap-8 rounded-3xl bg-[#F1FAEE] p-6 shadow-[inset_0_20px_25px_rgba(0,0,0,0.15)] sm:grid-cols-2 lg:grid-cols-4 md:p-10">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </div>
      ) : (
        <p>{"We're still working on our menu. Please come back later :)"}</p>
      )}
    </main>
  );
}
