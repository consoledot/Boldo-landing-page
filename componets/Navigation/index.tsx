import { BoldoLogo } from "../../icons";
import { Button } from "../Button";

const links = ["Products", "Services", "About"];
const Navigation = () => {
  return (
    <nav className="md:flex justify-between items-center w-full mb-10 hidden">
      <div>
        <BoldoLogo />
      </div>

      <ul className="flex items-center gap-10">
        {links.map((link, idx) => (
          <li
            key={idx}
            className="text-[#0A2640] font-bold cursor-pointer hover:underline "
          >
            {link}
          </li>
        ))}

        <Button title="Log In" className="self-center !py-[10px] !px-[45px] " />
      </ul>
    </nav>
  );
};

export { Navigation };
