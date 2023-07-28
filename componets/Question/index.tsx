import { useState } from "react";
import { ArrowDownRounded } from "../../icons";

const Question = ({ text }: { text: string }) => {
  const [open, toggleOpen] = useState(false);
  return (
    <article className="border-b-2 pb-5 flex flex-col gap-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleOpen((v) => !v)}
      >
        <p className="text-[20px] leading[18px] font-sans">{text}</p>
        <ArrowDownRounded />
      </div>
      {open ? (
        <p>
          Only a real risk has the quality of a belief, Only a real risk has the
          quality of a belief, Only a real risk has the quality of a belief{" "}
          <br />
          Only a real risk has the quality of a beliefOnly a real risk has the
          quality of a belief
        </p>
      ) : null}
    </article>
  );
};

export { Question };
