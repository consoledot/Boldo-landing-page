import type { NextPage } from "next";

import {
  Customers,
  Header,
  Services,
  Testimonial,
  Blog,
  Subscribe,
  Footer,
} from "../modules";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Testimonial />
      <Customers />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
