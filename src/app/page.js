import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import TitleDescription from "@/components/atoms/TitleDescription";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-2 items-center justify-between p-4">
      <TitleDescription
        title="یه مشکلی داریم"
        description="دوباره امتحان کنید یا به صفحه ی اصلی بروید !"
      />
      <Button
        text="بازگشت به خانه"
        variant="buttonOrange"
        icon={<span>🔔</span>}
      />
      <Button
        text="بازگشت به خانه"
        variant="buttonBlue"
        type="link"
        href="/404"
      />
      <Logo />
    </main>
  );
}
