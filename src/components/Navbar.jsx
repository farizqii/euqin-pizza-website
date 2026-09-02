import Image from "next/image";

export default function Navbar() {
  return (
    <header className="top-0 z-50 w-full backdrop-blur-sm">
      <div className="w-full bg-white shadow-lg">
        <div className="flex h-20 items-center justify-between px-5">
          <div className="flex flex-1 items-center gap-3">
            <Image
              src="/brand-logo.png"
              alt="Euqin's Pizzas Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="py-2.5 text-2xl font-extrabold tracking-wide text-black">
              Euqin&apos;s <span className="text-[#E63946]">Pizzas</span>
            </span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex item-center gap-1 text-sm font-medium">
              <li>
                <a
                  className="block px-5 py-2.5 text-black text-lg hover:text-xl"
                  href="#"
                >
                  Our Values
                </a>
              </li>
              <li>
                <a
                  className="block px-5 py-2.5 text-black text-lg hover:text-xl"
                  href="#"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  className="block px-5 py-2.5 text-black text-lg hover:text-xl"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
