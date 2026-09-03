"use client"; // Required in Next.js because we are using browser APIs (Date)

function Order({ closeHour, openHour }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <p>
        {`We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order online.`}
      </p>
    </div>
  );
}

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="text-sm">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          {`We're happy to welcome you between ${openHour}:00 and ${closeHour}:00`}
        </p>
      )}
    </footer>
  );
}
