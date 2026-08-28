import { pizzaData } from "../data/pizzaData";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="flex flex-col items-center gap-10">
      <h2 className="inline-block border-y-2 border-current py-2.5 text-2xl font-medium uppercase tracking-[3px]">
        Our menu
      </h2>

      {numPizzas > 0 ? (
        <>
          <p className="w-4/5 text-center text-[0.9375rem] leading-[1.6]">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="grid list-none grid-cols-2 gap-12">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>{"We're still working on our menu. Please come back later :)"}</p>
      )}
    </main>
  );
}
