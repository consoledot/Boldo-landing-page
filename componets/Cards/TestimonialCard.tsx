import { FC } from "react";
interface TestimonialCardProps {
  word: string;
  position: string;
  company: string;
  name: string;
  index: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  word,
  position,
  company,
  name,
  index,
}) => {
  return (
    <div className="flex flex-col self-start  gap-10 bg-white rounded-[12px] shadow-lg p-12 ">
      <p className="leading-[40px] text-[25px] font-sans font-light">{word}</p>
      <div className="flex gap-5 items-center">
        <img src={`/assets/author-${index}.png`} />
        <div className="flex flex-col justify-between">
          <p className="font-bold">{name}</p>
          <p>
            {position} @ {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };
