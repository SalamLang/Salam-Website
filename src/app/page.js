import Button from "@/components/atoms/Button";
import TitleDescription from "@/components/atoms/TitleDescription";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>test</h1>
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
        href="/home"
      />
    </main>
  );
}
