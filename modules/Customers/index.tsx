import { Question } from "../../components";

const questions = [
  "We connect our customers with the best?",
  "Android research & development rockstar? ",
];

const Customers = () => {
  return (
    <section className="max-w-7xl mx-auto my-10 md:my-[100px] p-6">
      <img src="/assets/team.png" className="mx-auto w-full" />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10 my-10">
        <p className="text-[20px] md:eext-[36px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className="flex flex-col gap-10">
          {questions.map((q, idx) => (
            <Question text={q} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Customers };
