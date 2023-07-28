import { BoldoLogo } from "../../icons";
import { Button } from "../Button";

const links = ["Products", "Services", "About"];
const Navigation = () => {
  return (
    <nav className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between md:items-center w-full mb-10 ">
      <div className="">
        <BoldoLogo />
      </div>

      <ul className="flex items-center gap-5 md:gap-10">
        {links.map((link, idx) => (
          <li
            key={idx}
            className="text-[#0A2640] font-bold cursor-pointer hover:underline "
          >
            {link}
          </li>
        ))}

        <Button
          title="Log In"
          className="self-center py-[5px] md:!py-[10px] !px-[20px] md:!px-[45px] text-[12px] whitespace-nowrap "
        />
      </ul>
    </nav>
  );
};

export { Navigation };
