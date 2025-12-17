import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative">
      {/* фон */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="" />
      </div>

      {/* ===== TEXT ZONE (ВСЕГДА СКРОЛЛ) ===== */}
      <div className="relative z-10 px-5 md:px-20 pt-24 pb-12">
        <header className="flex flex-col gap-7">
          <div className="hero-text">
            <h1>
              Работаем{" "}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>начни уже сегодня</h1>
            <h1>с любой суммы</h1>
          </div>

          <p className="text-white-50 md:text-xl">
            Мы — команда, специализирующаяся на межсетевом крипто-арбитраже.
          </p>
        </header>
      </div>

      {/* ===== 3D ZONE (НИЖЕ ТЕКСТА) ===== */}
      <div className="hero-3d-zone relative">
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
