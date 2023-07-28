import { Button, Input } from "../../componets";

const Subscribe = () => {
  return (
    <section className="max-w-7xl mx-auto bg-[#0A2640] my-[100px] rounded-lg p-10 ">
      <div className="max-w-4xl mx-auto">
        <h3 className="leading-[40px] md:leading-[72px] text-[30px] md:text-[45px] text-white text-center ">
          An enterprise template to ramp up your company website
        </h3>
        <div className="flex flex-col md:flex-row gap-7 md:gap-3 items-center justify-center my-10">
          <Input
            placeholder="Your email address"
            type="email"
            className="md:w-[40%] w-full "
          />
          <Button
            title="Start now"
            className="bg-[#65E4A3] border-[#65E4A3] "
          />
        </div>
      </div>
    </section>
  );
};

export { Subscribe };
