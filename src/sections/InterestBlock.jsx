import { motion } from "framer-motion";

const InterestBlock = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative my-24"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.08)] text-center">
        
        <h3 className="mb-6 text-2xl font-semibold text-white">
          В чём наш интерес?
        </h3>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-xl bg-black/40 p-6">
          
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-xl font-semibold text-emerald-400">
            20%
          </div>

          <p className="text-lg leading-relaxed text-white/90">
            Мы берём{" "}
            <span className="font-semibold text-white">
              20% от твоей чистой прибыли
            </span>
            .
            <br />
            <span className="font-medium text-emerald-400">
              Зарабатываешь ты — зарабатываем мы.
            </span>
          </p>

        </div>
      </div>
    </motion.section>
  );
};

export default InterestBlock;
