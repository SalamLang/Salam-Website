import Marquee from "@/components/organisms/Marquee";
import CodeExample from "@/components/templates/CodeExample";
import DescriptionOnlineCode from "@/components/templates/DescriptionOnlineCode";
import EducationDownload from "@/components/templates/EducationDownload";
import HeroMain from "@/components/templates/HeroMain";
import LanguageAdvantage from "@/components/templates/LanguageAdvantage";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-20 items-center justify-start">
      <HeroMain />
      <Marquee />
      <CodeExample />
      <DescriptionOnlineCode />
      <LanguageAdvantage />
      <EducationDownload />
    </main>
  );
}
