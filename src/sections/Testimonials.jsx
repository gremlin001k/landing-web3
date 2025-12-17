import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";

const sizeMap = {
  sm: "scale-90 opacity-70 blur-[0.3px]",
  md: "scale-100 opacity-90",
  lg: "scale-105 opacity-100",
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative section-padding overflow-hidden"
    >
      <TitleHeader
        title="FEEDBACK"
        sub="Отзывы наших клиентов"
      />

      {/* Градиенты как на скрине */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Лента */}
      <div className="relative mt-12 h-[700px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-feedback">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className={`
                transition-all duration-500
                ${sizeMap[item.size]}
              `}
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-black">
                <img
                  src={item.image}
                  alt="feedback"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
