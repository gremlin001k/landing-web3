import { FaTelegramPlane } from "react-icons/fa";

const FloatingTelegramButton = () => {
  return (
    <a
      href="https://t.me/your_username"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-12 left-1/2 -translate-x-1/2
        z-[9999]
        px-6 py-3
        flex items-center gap-3
        rounded-full
        bg-black
        text-white
        font-medium
        border border-white/10
        backdrop-blur-md
        shadow-[0_0_40px_rgba(0,136,204,0.35)]
        transition-transform
        hover:scale-105
        active:scale-95
      "
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/40 via-blue-500/40 to-indigo-500/40 blur-xl -z-10" />

      <FaTelegramPlane className="text-sky-400 text-xl" />
      <span>Написать в Telegram</span>
    </a>
  );
};

export default FloatingTelegramButton;
