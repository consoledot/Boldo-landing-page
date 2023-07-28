import { Button, ChartCard, MarqueeLogo, Navigation } from "../../componets";

const Header = () => {
  return (
    <main className="mx-auto py-10 max-w-7xl p-6">
      <Navigation />
      <header>
        <div className="flex flex-col md:grid md:grid-cols-2 items-center my-10  ">
          <div className="">
            <h1 className="text-4xl md:text-5xl leading-[50px] md:leading-[72px]">
              Save time by building fast with Boldo Template{" "}
            </h1>
            <p className="my-5">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex gap-3 my-10">
              <Button title="Buy template" variant="secondary" />
              <Button title="Explore" />
            </div>
          </div>
          <ChartCard />
        </div>
      </header>
      <MarqueeLogo />
    </main>
  );
};

export { Header };
