import { BoldoLogo } from "../../icons";
import { Button } from "../Button";

const Navigation = () => {
  return (
    <nav className="md:flex justify-between items-center w-full mb-10 hidden">
      <div>
        <BoldoLogo />
      </div>

      <ul className="flex items-center gap-3">
        <li className="text-primary">Product</li>
        <li>Services</li>
        <li>About</li>
        <Button title="Login" />
      </ul>
    </nav>
  );
};

export { Navigation };
