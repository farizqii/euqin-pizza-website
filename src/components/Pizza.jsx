import Image from "next/image";

export default function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <Image
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        width={120}
        height={120}
      />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "Sold out!" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
