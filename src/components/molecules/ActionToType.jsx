import EmojiShape from "../../../public/svgs/emoji-shape.svg";

export default function ActionToType() {
  return (
    <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center flex-grow select-none cursor-not-allowed">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-Estedad-Medium transition-colors dark:!text-white flex flex-row-reverse justify-center items-center select-none cursor-not-allowed">
        <EmojiShape className="relative max-md:-right-2 scale-50 md:scale-[0.70]" />
        به زبان سلام خوش آمدید
      </h2>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Estedad-SemiBold transition-colors dark:text-white select-none cursor-not-allowed">
        برای شروع چیزی تایپ کنید...
      </h1>
    </div>
  );
}
