import { BoldoLogo } from "../../icons";

const links = [
  {
    name: "Landings",
    options: ["Home", "Product", "Service"],
  },
  {
    name: "Company",
    options: [
      "Home",
      <span className="flex gap-2 items-center leading-6">
        Services
        <span className="bg-[#65E4A3] text-[#0A2640] rounded-[120px] px-5 font-sans py-1">
          Hiring!
        </span>
      </span>,
      "Service",
    ],
  },
  {
    name: "Resources",
    options: ["Blog", "Products", "Services"],
  },
];

const Footer = () => {
  return (
    <footer className="max-w-7xl p-10 mx-auto flex flex-col-reverse md:grid md:grid-cols-3 gap-10 my-[30px]">
      <div className="flex flex-col justify-between gap-10">
        <BoldoLogo />
        <p className="text-[#777777]">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="text-[#777777] my-7">All rights reserved.</p>
      </div>
      <div className="col-span-2">
        <div className="flex flex-wrap gap-10 justify-between md:gap-4 md:grid md:grid-cols-3 w-full">
          {links.map((link, idx) => (
            <div key={idx} className="flex flex-col justify-between gap-8">
              <p className="font-bold">{link.name}</p>
              <ul className="flex flex-col justify-between gap-8">
                {link.options.map((option, i) => (
                  <li key={i} className="text-[#777777]">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
