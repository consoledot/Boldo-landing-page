import { ImageCard, ServiceCard } from "../../componets";
import { Check, EyeIcon, FeatherIcon, SunIcon } from "../../icons";
import cn from "classnames";
const services = [
  "Cool feature title",
  "Even cooler feature",
  "Cool feature title",
];

const whatWeDo = [
  "We connect our customers with the best.",
  "Advisor success customer launch party.",
  "Business-to-consumer long tail.",
];

const whatWeDo2 = [
  {
    title: "We connect our customers with the best.",
    icon: FeatherIcon,
  },
  {
    title: "Advisor success customer launch party.",
    icon: EyeIcon,
  },
  {
    title: "Business-to-consumer long tail.",
    icon: SunIcon,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-[#0A2640] text-white p-10 space-y-10">
        <div className="mx-auto max-w-4xl my-10 flex flex-col gap-3 text-center ">
          <h3 className="text-1xl md:text-[20px]">Our service</h3>
          <p className=" text-2xl md:text-[38px] leading-[40px]">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-3 justify-between max-w-7xl mx-auto my-10">
          {services.map((service, idx) => (
            <ServiceCard title={service} key={idx} index={idx} />
          ))}{" "}
        </div>
      </section>
      <section className="max-w-7xl my-[150px]  mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 py-10 items-center">
          <div>
            <ImageCard name="income" type="man" />
          </div>

          <div className="justify-self-end">
            <p className="text-[36px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className="flex flex-col gap-7 my-10">
              {whatWeDo.map((w, idx) => (
                <article key={idx} className="flex gap-5 items-center">
                  <Check />
                  <p className="text-[20px]">{w}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl my-[150px] mx-auto ">
        <div className="flex flex-col md:grid md:grid-cols-2 py-10 items-center">
          <div>
            <p className="text-[36px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className="flex flex-col gap-7 my-10">
              {whatWeDo2.map(({ title, icon: Icon }, idx) => (
                <article
                  key={idx}
                  className={cn(
                    "flex gap-7 items-center p-5 rounded shadow-lg",
                    {
                      "bg-[#0A2640] text-white": idx === 0,
                    }
                  )}
                >
                  <Icon />
                  <p className="text-[20px]">{title}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="justify-self-end">
            <ImageCard name="distribution" type="woman" position="right" />
          </div>
        </div>
      </section>
    </>
  );
};

export { Services };
