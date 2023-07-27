import { TestimonialCard } from "../../componets";
import { ArrowLeftRounded, ArrowRightRounded } from "../../icons";

const contacts = [
  {
    word: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    position: "Manager",
    company: "Howarts",
  },
  {
    word: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    position: "Manager",
    company: "Slytherin",
  },
  {
    word: "“Release facebook responsive web design business model canvas seed money monetization.”",
    name: "Harry Potter",
    position: "Team Lead",
    company: "Gryffindor",
  },
];
const Testimonial = () => {
  return (
    <section className=" bg-[#0A2640]">
      <div className="py-10 flex flex-col gap-10">
        <div className="max-w-7xl mx-auto">
          <div className="py-15 flex flex-col md:flex-row justify-between items-end ">
            <h3 className="text-[40px] text-white max-w-3xl">
              An enterprise template to ramp up your company website
            </h3>
            <div className="flex items-center gap-3">
              <ArrowLeftRounded />
              <ArrowRightRounded />
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 justify-between gap-7 py-10">
            {contacts.map((c, idx) => (
              <TestimonialCard {...c} index={idx} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
