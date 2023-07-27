import type { NextPage } from "next";

import { Customers, Header, Services, Testimonial, Blog } from "../modules";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Testimonial />
      <Customers />
      <Blog />
    </div>
  );
};

export default Home;
