import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="">
      <section className="">
        <Banner/>
      </section>

      <section className="md:w-11/12 mx-auto">
        <About/>
      </section>

      <section className="md:w-11/12 mx-auto">
        <Services/>
      </section>

      <section className="md:w-11/12 mx-auto">
        <Testimonial/>
      </section>
    </div>
  );
}
