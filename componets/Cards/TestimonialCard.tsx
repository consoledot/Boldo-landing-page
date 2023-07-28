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
      <p className="leading-[30px] md:leading-[40px] text-[18px] md:text-[25px] font-sans font-light">
        {word}
      </p>
      <div className="flex gap-3 md:gap-5 items-center">
        <img
          src={`/assets/author-${index}.png`}
          className="scale-75 md:scale-100"
        />
        <div className="flex flex-col justify-between">
          <p className="text-[14px] md:text-[16px] font-bold">{name}</p>
          <p className="text-[15px] md:text-[16px]">
            {position} @ {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };
