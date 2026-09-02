import Image from "next/image";

export default function Homepage() {
  return (
    <main className="mb-32 flex w-full flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:px-24">
      <div className="w-full lg:w-1/2">
        <Image
          src="/pizza-home.jpg"
          alt="Euqin's Pizzas Homepage"
          width={800}
          height={600}
          className="h-auto w-full rounded-4xl object-cover shadow-2xl shadow-black/20 transition-transform hover:scale-105"
        />
      </div>

      <div className="flex w-full flex-col lg:w-1/2">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Welcome to Euqin&apos;s <br />
          <span className="text-[#E63946]">Pizzas.</span>
        </h1>

        <div className="mb-8 flex flex-col gap-5 text-gray-700 md:text-lg">
          <p>
            At Euqin&apos;s Pizzas, we believe that every slice tells a story.
            We handcraft our pizzas daily using only the freshest, locally
            sourced ingredients and authentic recipes passed down through
            generations. From our perfectly blistered, wood-fired crusts to our
            rich, savory signature sauce, every detail is carefully designed to
            bring you the ultimate dining experience.
          </p>
          <p>
            Whether you are craving a classic Neapolitan, a hearty comfort pie,
            or a unique gourmet creation topped with artisanal prosciutto and
            fresh greens, we have something to satisfy every palate. Discover
            the passion baked into every bite and see why our community keeps
            coming back for more.
          </p>
        </div>

        <button className="w-fit rounded-xl border-2 border-white bg-[#E63946] px-8 py-2.5 text-lg font-bold text-white ring-2 ring-[#E63946] transition-transform hover:scale-105">
          Learn more
        </button>
      </div>
    </main>
  );
}
