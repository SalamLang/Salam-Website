import Marquee from "@/components/organisms/Marquee";
import HeroMain from "@/components/templates/HeroMain";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-20 items-center justify-start p-4">
      <HeroMain />
      <Marquee />
    </main>
  );
}
