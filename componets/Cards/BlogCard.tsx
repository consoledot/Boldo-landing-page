import { FC } from "react";

interface BlogCardProps {
  index: number;
  name: string;
  text: string;
}

const BlogCard: FC<BlogCardProps> = ({ index, name, text }) => {
  return (
    <article className="flex flex-col gap-3 justify-between">
      <img src={`/assets/blog-${index}.png`} className="w-[80%]" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <p className="font-bold">Category</p>
          <p>November 22,2021</p>
        </div>
        <p className="text-[20px] w-[80%] my-5">{text}</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src={`/assets/writer-${index}.png`} />
        <p>{name}</p>
      </div>
    </article>
  );
};

export { BlogCard };
