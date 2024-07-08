import Accordion from "@/components/molecules/Accordion";
import AccordionContainer from "@/components/organisms/AccordionContainer";
import Marquee from "@/components/organisms/Marquee";
import BestComment from "@/components/templates/BestComment";
import CodeExample from "@/components/templates/CodeExample";
import DescriptionOnlineCode from "@/components/templates/DescriptionOnlineCode";
import HeroMain from "@/components/templates/HeroMain";
import HomeDownload from "@/components/templates/HomeDownload";
import LanguageAdvantage from "@/components/templates/LanguageAdvantage";
import Learn from "@/components/templates/Learn";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-20 items-center justify-start">
      <HeroMain />
      <Marquee />
      <CodeExample />
      <DescriptionOnlineCode />
      <LanguageAdvantage />
      <HomeDownload />
      <BestComment />
      <Learn />
      <AccordionContainer />
    </main>
  );
}
