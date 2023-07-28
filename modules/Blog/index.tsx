import { BlogCard, Button } from "../../components";

const posts = [
  {
    name: "Chandler Bing",
    text: "Pitch termsheet backing validation focus release.",
  },
  {
    text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    name: "Rachel Green",
  },
  {
    text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    name: "Monica Geller",
  },
];
const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="mx-auto max-w-4xl my-10 flex flex-col gap-3 text-center">
        <h3 className="text-1xl md:text-[20px] text-[#777777]">Our Blog</h3>
        <p className=" text-2xl md:text-[38px] leading-[40px]">
          Value proposition accelerator product management venture
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-between gap-10 md:gap-5 py-10">
        {posts.map((post, idx) => (
          <BlogCard name={post.name} text={post.text} key={idx} index={idx} />
        ))}
      </div>
      <div className="mx-auto w-full flex justify-center">
        <Button title="Load More" />
      </div>
    </section>
  );
};

export { Blog };
