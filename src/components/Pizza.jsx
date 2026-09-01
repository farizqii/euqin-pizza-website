import Image from "next/image";

export default function Pizza({ pizzaObj }) {
  return (
    <li
      className={`flex gap-6 rounded-3xl bg-white p-2 shadow-md items-start ${
        pizzaObj.soldOut ? "text-muted opacity-70" : ""
      }`}
    >
      <Image
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        width={120}
        height={120}
        className={`aspect-square w-32 h-32 shrink-0 self-start rounded-3xl shadow-inner object-cover ${
          pizzaObj.soldOut ? "grayscale opacity-80" : ""
        }`}
      />
      <div className="flex flex-col gap-2 py-1 min-w-0">
        <h3 className="text-xl font-extrabold leading-tight">
          {pizzaObj.name}
        </h3>
        <p className="text-sm font-light italic text-gray-600">
          {pizzaObj.ingredients}
        </p>
        <span
          className={`block text-lg font-bold mt-1 ${pizzaObj.soldOut ? "text-red-500" : "text-green-500"}`}
        >
          {pizzaObj.soldOut ? "Sold out!" : "$" + pizzaObj.price}
        </span>
      </div>
    </li>
  );
}
