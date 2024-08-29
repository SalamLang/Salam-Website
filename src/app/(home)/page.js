import AccordionContainer from "@/components/organisms/AccordionContainer";
import Marquee from "@/components/organisms/Marquee";
import BestComment from "@/components/templates/BestComment";
import CodeExample from "@/components/templates/CodeExample";
import DescriptionOnlineCode from "@/components/templates/DescriptionOnlineCode";
import GoToLearn from "@/components/templates/GoToLearn";
import HeroMain from "@/components/templates/HeroMain";
import HomeDownload from "@/components/templates/HomeDownload";
import LanguageAdvantage from "@/components/templates/LanguageAdvantage";
import Learn from "@/components/templates/Learn";
import NumberBox from "@/components/templates/NumberBox";
import SliderTemplate from "@/components/templates/SliderTemplate";
import Users from "@/components/templates/Users";
import Header from "@/components/templates/Header";
import GetTutorial from "@/components/templates/GetTutorial";
import WantSupporter from "@/components/templates/WantSupporter";
import FirstPersianLanguage from "@/components/templates/FirstPersianLanguage";

export const metadata = {
  title: "home",
  description: "salam language",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-20 items-center justify-start">
      <HeroMain />
      <CodeExample />
      <FirstPersianLanguage />
      <DescriptionOnlineCode />
      <LanguageAdvantage />
      <HomeDownload isBlackIcon={true} />
      {/*<Learn />*/}
      <SliderTemplate />
      {/*<AccordionContainer />*/}
      <Marquee />
      <Users />
      <NumberBox />
      <GetTutorial />
      <WantSupporter />
    </main>
  );
}
